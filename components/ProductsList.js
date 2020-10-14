import React, { useState, useCallback } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { Modal, Thumbnail, Checkbox, TextStyle } from '@shopify/polaris'
import { Table, Header } from 'semantic-ui-react'
import { toCurrency } from '../utils/helper'
import config from '../aws-exports'
import {listProducts} from "../graphql/queries"
import {updatePaymentRequest} from "../graphql/mutation"

API.configure(config)

const ProductsList = ({ active, handleChange, paymentRequestId }) => {
    const { loading, error, data } = useQuery(listProducts)
    const [rowId, setRowId] = useState([])
    const [state, setState] = useState({
        products: []
    })
  
    if (loading) {
        return <div>Loading products...</div>
    }

    if (error) {
        return <div>Some error occured</div>
    }

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
