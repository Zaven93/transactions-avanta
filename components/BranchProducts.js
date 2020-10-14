import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { API, graphqlOperation } from 'aws-amplify'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { Modal, Thumbnail, Checkbox, TextStyle } from '@shopify/polaris'
import { Table, Header } from 'semantic-ui-react'
import { toCurrency, formatDate } from '../utils/helper'
import config from '../aws-exports'
import BranchRow from './BranchRow'
import { subscribe } from 'graphql'

API.configure(config)

const listProducts = gql`
    query Products {
        products(first: 100) {
            edges {
                node {
                    id
                    title
                    tags
                    description(truncateAt: 100)
                    variants(first: 1) {
                        edges {
                            node {
                                id
                                price
                            }
                        }
                    }
                    images(first: 1) {
                        edges {
                            node {
                                originalSrc
                            }
                        }
                    }
                }
            }
        }
    }
`

const createBranchProduct = gql`
    mutation createBranchProduct($input: CreateBranchProductInput!) {
        createBranchProduct(input: $input) {
            id
            branchId
            productId
            tags
        }
    }
`
const productUpdate = gql`
    mutation productUpdate($input: ProductInput!) {
        productUpdate(input: $input) {
            product {
                id
                metafields(first: 100) {
                    edges {
                        node {
                            namespace
                            key
                            value
                        }
                    }
                }
            }
        }
    }
`
const getBranchById = gql`
    query getBranch($id: ID!) {
        getBranch(id: $id) {
            transactions(sortDirection: DESC) {
                items {
                    branchId
                    createdAt
                    currency
                    note
                    customer {
                        email
                        id
                        firstName
                        lastName
                        phone
                    }
                    totalBonusAmount
                    totalPrice
                    updatedAt
                    sortDate
                }
            }
            branchName
            adminId
            id
            branchProducts {
                items {
                    branchId
                    createdAt
                    id
                    productId
                    tags
                    updatedAt
                }
            }
        }
    }
`

const updateBranchProduct = gql`
    mutation updateBranchProduct($input: UpdateBranchProductInput!) {
        updateBranchProduct(input: $input) {
            id
            tags
            branchId
            productId
        }
    }
`

const deleteBranchProduct = gql`
    mutation deleteBranchProduct($input: DeleteBranchProductInput!) {
        deleteBranchProduct(input: $input) {
            id
        }
    }
`

const onCreateBranchProduct = gql`
    subscription onCreateBranchProduct {
        onCreateBranchProduct {
            id
        }
    }
`
const onUpdateBranchProduct = gql`
    subscription onUpdateBranchProduct {
        onUpdateBranchProduct {
            id
        }
    }
`

const onDeleteBranchProduct = gql`
    subscription onDeleteBranchProduct {
        onDeleteBranchProduct {
            id
        }
    }
`

const ProductsList = ({ active, handleChange, branchId, branchName }) => {
    const { loading, error, data } = useQuery(listProducts)
    const [branchProductSubscription, setBranchProductSubscription] = useState('')
    const [rowId, setRowId] = useState([])
    const [state, setState] = useState({
        products: []
    })
    const [searchValue, setSearchValue] = useState(null)
    const [branchInfo, setBranchInfo] = useState('')
    const handleSearchInput = useCallback((newValue) => setSearchValue(newValue), [])

    const getBranch = async () => {
        try {
            const branch = await API.graphql(graphqlOperation(getBranchById, { id: branchId }))
            setBranchInfo(branch.data.getBranch)
            setRowId([
                ...rowId,
                ...branch.data.getBranch.branchProducts.items.map((item) => item.productId)
            ])
            setState({
                products: [
                    ...state.products,
                    ...branch.data.getBranch.branchProducts.items.map((product) => ({
                        id: product.productId
                    }))
                ]
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBranch()

        const createListener = API.graphql(graphqlOperation(onCreateBranchProduct)).subscribe({
            next: (createdBranchProduct) => setBranchProductSubscription(createdBranchProduct)
        })
        const updateListener = API.graphql(graphqlOperation(onUpdateBranchProduct)).subscribe({
            next: (updatedBranchProduct) => setBranchProductSubscription(updatedBranchProduct)
        })
        const deleteListener = API.graphql(graphqlOperation(onDeleteBranchProduct)).subscribe({
            next: (deletedBranchProduct) => setBranchProductSubscription(deletedBranchProduct)
        })

        return () => {
            createListener.unsubscribe()
            updateListener.unsubscribe()
            deleteListener.unsubscribe()
        }
    }, [branchId, branchProductSubscription])

    if (loading) {
        return <div>Loading products...</div>
    }

    if (error) {
        return <div>Some error occured</div>
    }

    console.log('Branch info from BranchProducts', branchInfo)
    console.log('Products from state in BranchProducts', state.products)

    const deleteProductsFromBranch = () => {
        const productsToDeleteFromBranch = branchInfo.branchProducts.items.filter(
            (branchProduct) =>
                !state.products.map((product) => product.id).includes(branchProduct.productId)
        )
        console.log('Products that are not included in products array', productsToDeleteFromBranch)
        Promise.all(
            productsToDeleteFromBranch.map((deleteProduct) => {
                API.graphql(
                    graphqlOperation(deleteBranchProduct, { input: { id: deleteProduct.id } })
                )
            })
        ).catch((err) => console.log(err))
        return
    }

    const addProductsToBranch = () => {
        Promise.all(
            state.products.map((product) => {
                const updatedProduct = branchInfo.branchProducts.items.filter(
                    (branchProduct) => branchProduct.productId === product.id
                )[0]
                if (updatedProduct) {
                    console.log('Yes it containes products that should be updated', updatedProduct)
                    API.graphql(
                        graphqlOperation(updateBranchProduct, {
                            input: {
                                id: updatedProduct.id,
                                tags: product.tags
                            }
                        })
                    )
                } else {
                    console.log("No it doesn't contain the product that should be updated")
                    API.graphql(
                        graphqlOperation(createBranchProduct, {
                            input: {
                                id: uuidv4(),
                                branchId: branchId,
                                productId: product.id,
                                tags: product.tags
                            }
                        })
                    )
                }
            })
        ).catch((err) => console.log(err))
        return
    }

    // const updateProducts = async () => {
    //     try {
    //         await axios({
    //             url: 'http://localhost:3000/updateProduct',
    //             method: 'POST',
    //             data: {
    //                 products: state.products
    //             }
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    console.log('State data from product list', state)
    console.log('BranchInfo from modalZaven jan', branchInfo)

    return (
        <Modal
            open={active}
            onClose={() => handleChange()}
            title="Choose products"
            primaryAction={{
                content: 'Save changes',
                onAction: () => {
                    addProductsToBranch()
                    deleteProductsFromBranch()
                    // updateProducts()
                    handleChange()
                }
            }}>
            <Modal.Section>
                <Table celled striped selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Products</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Price</Table.HeaderCell>
                            <Table.HeaderCell>Bonus Percentage</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data &&
                            branchInfo &&
                            data.products.edges
                                // .filter((product) => {
                                //     if (searchValue == null) {
                                //         return product
                                //     } else if (
                                //         product.node.title
                                //             .toLowerCase()
                                //             .includes(searchValue.toLowerCase())
                                //     ) {
                                //         return product
                                //     }
                                // })
                                .map((product) => (
                                    <BranchRow
                                        rowId={rowId}
                                        setRowId={setRowId}
                                        branchInfo={branchInfo}
                                        branchId={branchId}
                                        product={product}
                                        state={state}
                                        setState={setState}
                                    />
                                    // <Table.Row
                                    //     key={product.node.id}
                                    //     >
                                    //     <Table.Cell>
                                    //         <Header as="h4" image className="product-header">
                                    //             <Checkbox
                                    //                 checked={
                                    //                     rowId.includes(product.node.id) && true
                                    //                 }
                                    //                 onClick={() => {
                                    //                     if (rowId.includes(product.node.id)) {
                                    //                         setRowId(
                                    //                             rowId.filter((id) => id !== product.node.id)
                                    //                         )
                                    //                         setState({
                                    //                             products: state.products.filter(
                                    //                                 (filteredProduct) =>
                                    //                                     filteredProduct.node.id !==
                                    //                                     product.node.id
                                    //                             )
                                    //                         })
                                    //                     } else {
                                    //                         setRowId([...rowId, product.node.id])
                                    //                         setState({
                                    //                             ...state,
                                    //                             products: [...state.products, product]
                                    //                         })
                                    //                     }
                                    //                 }}
                                    //             />
                                    //             <Thumbnail
                                    //                 source={
                                    //                     product.node.images.edges[0] &&
                                    //                     product.node.images.edges[0].node
                                    //                         .originalSrc
                                    //                 }
                                    //                 size="small"
                                    //                 alt=""
                                    //             />
                                    //             <Header.Content>
                                    //                 {product.node.title}
                                    //             </Header.Content>
                                    //         </Header>
                                    //     </Table.Cell>
                                    //     <Table.Cell>
                                    //         <TextStyle variation="subdued">
                                    //             {product.node.description}
                                    //         </TextStyle>
                                    //     </Table.Cell>
                                    //     <Table.Cell textAlign="center">
                                    //         <TextStyle variation="subdued">
                                    //             {product.node.variants.edges[0] &&
                                    //                 toCurrency(
                                    //                     product.node.variants.edges[0].node.price
                                    //                 )}
                                    //         </TextStyle>
                                    //     </Table.Cell>
                                    // </Table.Row>
                                ))}
                    </Table.Body>
                    <Table.Footer fullWidth>
                        <Table.Row></Table.Row>
                    </Table.Footer>
                </Table>
            </Modal.Section>
        </Modal>
    )
}

export default ProductsList
