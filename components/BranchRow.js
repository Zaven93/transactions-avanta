import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { API, graphqlOperation } from 'aws-amplify'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { Modal, Thumbnail, Checkbox, TextStyle, TextField } from '@shopify/polaris'
import { Table, Header, Icon } from 'semantic-ui-react'
import { toCurrency, formatDate } from '../utils/helper'
import config from '../aws-exports'
import { getBranchById } from '../graphql/queries'

API.configure(config)

const BranchRow = ({ product, state, setState, branchId, branchInfo, rowId, setRowId }) => {
    const [fetchedProduct, setFetchedProduct] = useState({
        description: product.node.description,
        id: product.node.id,
        image: product.node.images.edges[0] ? product.node.images.edges[0].node.originalSrc : '',
        tags: product.node.tags,
        title: product.node.title,
        variants: {
            id: product.node.variants.edges[0].node.id,
            price: product.node.variants.edges[0].node.price
        }
    })
    // const [branchInfo, setBranchInfo] = useState('')
    // const [rowId, setRowId] = useState('')
    const [searchValue, setSearchValue] = useState(null)
    const [bonus, setBonus] = useState('')
    const [checked, setChecked] = useState(false)
    const handleSearchInput = useCallback((newValue) => setSearchValue(newValue), [])

    const handleBonus = useCallback((value) => {
        setBonus(value)
        fetchedProduct.tags = [value]
        setFetchedProduct(fetchedProduct)
    }, [])

    const compareProduct = () => {
        const comparedProduct = branchInfo.branchProducts.items.filter(
            (branchProduct) => branchProduct.productId === fetchedProduct.id
        )

        console.log('Here is your compared product', comparedProduct)

        if (!comparedProduct || comparedProduct === undefined) {
            return
        }
        setBonus(comparedProduct[0] ? comparedProduct[0].tags[0] : '')
        return
    }

    // const getBranch = async () => {
    //     try {
    //         const branch = await API.graphql(graphqlOperation(getBranchById, { id: branchId }))
    //         setBranchInfo(branch.data.getBranch)
    //         setRowId(
    //             branch.data.getBranch.branchProducts.items
    //                 .map((item) => item.productId)
    //                 .filter((productId) => productId === fetchedProduct.id)[0]
    //         )
    //         setState({
    //             products: [
    //                 ...state.products,
    //                 ...branch.data.getBranch.branchProducts.items.filter(
    //                     (product) => product.productId === fetchedProduct.id
    //                 )[0]
    //             ]
    //         })
    //         compareProduct(branch.data.getBranch.branchProducts)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        console.log(
            'Row id from useEffect',
            branchInfo.branchProducts.items
                .map((item) => item.productId)
                .filter((productId) => productId === fetchedProduct.id)[0]
        )
        // setRowId([...rowId, branchInfo.branchProducts.items
        //         .map((item) => item.productId)
        //         .filter((productId) => productId === fetchedProduct.id)[0]])
        compareProduct()
    }, [product, branchInfo])

    console.log('Fetched product', fetchedProduct)
    console.log('State from BranchRow', state)
    console.log('Row id from BranchRow', rowId)

    return (
        <Table.Row key={fetchedProduct.id}>
            <Table.Cell>
                <Header as="h4" image className="product-header">
                    <Checkbox
                        checked={rowId.includes(fetchedProduct.id) && true}
                        onChange={() => {
                            if (rowId.includes(fetchedProduct.id)) {
                                setRowId(rowId.filter((id) => id !== fetchedProduct.id))
                                setState({
                                    products: state.products.filter(
                                        (filteredProduct) =>
                                            filteredProduct.id !== fetchedProduct.id
                                    )
                                })
                            } else {
                                setRowId([...rowId, fetchedProduct.id])
                                setState({
                                    ...state,
                                    products: [...state.products, fetchedProduct]
                                })
                            }
                        }}
                    />
                    <Thumbnail source={fetchedProduct.image} size="small" alt="" />
                    <Header.Content>{fetchedProduct.title}</Header.Content>
                </Header>
            </Table.Cell>
            <Table.Cell textAlign="center">
                <TextStyle variation="subdued">
                    {fetchedProduct.variants && toCurrency(fetchedProduct.variants.price)}
                </TextStyle>
            </Table.Cell>
            <Table.Cell>
                <TextField
                    id="percentage-input"
                    placeholder="Bonus Percentage"
                    value={bonus}
                    onChange={handleBonus}
                    prefix={<Icon name="percent" />}
                    disabled={!rowId.includes(fetchedProduct.id)}
                />
            </Table.Cell>
        </Table.Row>
    )
}

export default BranchRow
