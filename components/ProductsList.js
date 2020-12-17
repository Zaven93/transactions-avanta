import React, { useState, useEffect, useRef } from 'react'
import { useQuery } from '@apollo/client'
import { Modal, Thumbnail, Checkbox, TextStyle, TextField, Icon } from '@shopify/polaris'
import { SearchMajorMonotone } from '@shopify/polaris-icons'
import { Table, Header } from 'semantic-ui-react'
import { useUpdatePaymentRequest, useBranchByAdmin } from '../core/hooks'
import { toCurrency } from '../utils/helper'
import { listProducts } from '../graphql/queries'
import { updatePaymentRequest } from '../graphql/mutation'

const ProductsList = ({
    state,
    setState,
    rowId,
    setRowId,
    active,
    handleChange,
    user,
    orderProducts,
    setOrderProducts,
    searchValue,
    setSearchValue,
    handleSearchInput
}) => {
    const { loading, error, data } = useQuery(listProducts)
    const [branchProducts, setBranchProducts] = useState([])
    // const [rowId, setRowId] = useState([])
    // const [state, setState] = useState({
    //   products: [],
    // })

    const { data: branchData, refetch: getBranch } = useBranchByAdmin(user.attributes.sub)

    const { updatePaymentRequest } = useUpdatePaymentRequest()

    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current && active) {
            setTimeout(() => inputRef.current && inputRef.current.focus(), 200)
        }
    }, [active])

    useEffect(() => {
        if (!branchData) {
            return
        }
        const products =
            branchData &&
            branchData.data.branchByAdminId.items[0].branchProducts.items.map((branchProduct) => ({
                productId: branchProduct.productId,
                bonus: branchProduct.tags[0]
            }))

        setBranchProducts(products)
    }, [branchData])

    useEffect(() => {
        setState({
            products: state.products.filter((product) => rowId.includes(product.node.id))
        })
    }, [rowId])

    if (loading) {
        return <div>Loading products...</div>
    }

    if (error) {
        return <div>Some error occured</div>
    }

    const addProductsToOrder = () => {
        if (!state.products) {
            return
        }

        const productsArray = state.products.map((product) => ({
            id: product.node.id,
            title: product.node.title,
            image: product.node.images.edges[0].node.originalSrc,
            price: product.node.variants.edges[0].node.price,
            quantity: 1,
            variantId: product.node.variants.edges[0].node.id,
            bonus:
                branchProducts.find((branchProduct) => branchProduct.productId === product.node.id)
                    .bonus > 0
                    ? branchProducts.find(
                          (branchProduct) => branchProduct.productId === product.node.id
                      ).bonus
                    : 0
        }))

        setOrderProducts(productsArray)
    }

    return (
        <Modal
            open={active}
            onClose={async () => {
                handleChange()
                if (orderProducts.length <= 0) {
                    setRowId([])
                    setState({
                        products: []
                    })
                }

                if (orderProducts.length > 0) {
                    await setRowId(orderProducts.map((product) => product.id))
                }
            }}
            title="Choose products"
            primaryAction={{
                content: 'Proceed',
                onAction: () => {
                    addProductsToOrder()
                    handleChange()
                }
            }}>
            <Modal.Section>
                <div className="search-order-products-input">
                    <Icon source={SearchMajorMonotone} />
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        type="text"
                    />
                </div>
            </Modal.Section>
            <Modal.Section>
                <Table celled striped selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Products</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Price</Table.HeaderCell>
                            <Table.HeaderCell>Bonus</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data &&
                            data.products.edges
                                .filter((product) => {
                                    if (!branchProducts) {
                                        return
                                    }

                                    return branchProducts
                                        .map((branchProduct) => branchProduct.productId)
                                        .includes(product.node.id)
                                })
                                .filter((product) => {
                                    if (searchValue == null) {
                                        return product
                                    } else if (
                                        product.node.title
                                            .toLowerCase()
                                            .includes(searchValue.toLowerCase())
                                    ) {
                                        return product
                                    }
                                })
                                .map((product) => (
                                    <Table.Row
                                        key={product.node.id}
                                        onClick={() => {
                                            if (rowId.includes(product.node.id)) {
                                                setRowId(
                                                    rowId.filter((id) => id !== product.node.id)
                                                )
                                            } else {
                                                setRowId([...rowId, product.node.id])
                                                setState({
                                                    ...state,
                                                    products: [...state.products, product]
                                                })
                                            }
                                        }}>
                                        <Table.Cell>
                                            <Header as="h4" image className="product-header">
                                                <Checkbox
                                                    checked={rowId
                                                        .filter((id) => {
                                                            return orderProducts.filter(
                                                                (orderProduct) =>
                                                                    orderProduct.id === id
                                                            )
                                                        })
                                                        .includes(product.node.id)}
                                                />
                                                <Thumbnail
                                                    source={
                                                        product.node.images.edges[0] &&
                                                        product.node.images.edges[0].node
                                                            .originalSrc
                                                    }
                                                    size="small"
                                                    alt=""
                                                />
                                                <Header.Content>
                                                    {product.node.title}
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell textAlign="center">
                                            <TextStyle variation="subdued">
                                                {product.node.variants.edges[0] &&
                                                    toCurrency(
                                                        product.node.variants.edges[0].node.price
                                                    )}
                                            </TextStyle>
                                        </Table.Cell>
                                        <Table.Cell textAlign="center">
                                            <TextStyle variation="subdued">
                                                {branchProducts.find(
                                                    (branchProduct) =>
                                                        branchProduct.productId === product.node.id
                                                ).bonus > 0
                                                    ? branchProducts.find(
                                                          (branchProduct) =>
                                                              branchProduct.productId ===
                                                              product.node.id
                                                      ).bonus
                                                    : 0}
                                                %
                                            </TextStyle>
                                        </Table.Cell>
                                    </Table.Row>
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
