import React, { useState, useCallback } from 'react'
import axios from 'axios'
import { API, graphqlOperation } from 'aws-amplify'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { Modal, Thumbnail, Checkbox, TextStyle } from '@shopify/polaris'
import { Table, Header } from 'semantic-ui-react'
import { toCurrency, formatDate } from '../utils/helper'
import config from '../aws-exports'

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

const updatePaymentRequest = gql`
    mutation updatePaymentRequest($input: UpdatePaymentRequestInput!) {
        updatePaymentRequest(input: $input) {
            bonusAmount
            customerId
            id
            orderId
            status
            products {
                originalUnitPrice
                quantity
                variantId
            }
            createdAt
            updatedAt
        }
    }
`

const ProductsList = ({ active, handleChange, paymentRequestId }) => {
    const { loading, error, data } = useQuery(listProducts)
    const [rowId, setRowId] = useState([])
    const [state, setState] = useState({
        products: []
    })
    const [searchValue, setSearchValue] = useState(null)
    const handleSearchInput = useCallback((newValue) => setSearchValue(newValue), [])

    if (loading) {
        return <div>Loading products...</div>
    }

    if (error) {
        console.log('Some error Zaven', error)
        return <div>Some error occured</div>
    }

    console.log('State data from product list', state)

    const acceptPayment = async () => {
        try {
            const paymentResponse = await API.graphql(
                graphqlOperation(updatePaymentRequest, {
                    input: {
                        id: paymentRequestId,
                        status: 'APPROVED',
                        products: state.products.map((product) => ({
                            originalUnitPrice: product.node.variants.edges[0].node.price,
                            quantity: 1,
                            variantId: product.node.variants.edges[0].node.id
                        }))
                    }
                })
            )

            console.log('Payment data from lambda', paymentResponse.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Modal
            open={active}
            onClose={handleChange}
            title="Choose products"
            primaryAction={{
                content: 'Proceed',
                onAction: () => {
                    acceptPayment()
                    handleChange()
                }
            }}>
            <Modal.Section>
                <Table celled striped selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Products</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data &&
                            data.products.edges
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
                                                setState({
                                                    products: state.products.filter(
                                                        (filteredProduct) =>
                                                            filteredProduct.node.id !==
                                                            product.node.id
                                                    )
                                                })
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
                                                    checked={
                                                        rowId.includes(product.node.id) && true
                                                    }
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
                                        <Table.Cell>
                                            <TextStyle variation="subdued">
                                                {product.node.description}
                                            </TextStyle>
                                        </Table.Cell>
                                        <Table.Cell textAlign="center">
                                            <TextStyle variation="subdued">
                                                {product.node.variants.edges[0] &&
                                                    toCurrency(
                                                        product.node.variants.edges[0].node.price
                                                    )}
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
