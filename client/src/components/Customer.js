import React, { useEffect, useContext, useCallback, useState } from 'react'
import axios from 'axios'
import { API, graphqlOperation } from 'aws-amplify'
import { Avatar, Card, Button, Thumbnail, TextStyle } from '@shopify/polaris'
import { Table, Header } from 'semantic-ui-react'
import { useSendOrder, useGetCustomer } from '../core/hooks'
import { Context } from '../store/Store'
import { CREATE_ORDER, GET_CUSTOMER } from '../store/actionTypes'
import { toCurrency } from '../utils/helper'
import { branchByAdminId } from '../graphql/query'
import config from '../aws-exports'

API.configure(config)

const Customer = ({ history, match }) => {
    const { avantaState, dispatch } = useContext(Context)
    const customer = avantaState.customer
    const customerId = avantaState.customerId
    const chosenProducts = avantaState.chosenProducts
    const [branchInfo, setBranchInfo] = useState('')
    const { sendOrder, data: order } = useSendOrder()
    const { data: customerData, refetch: getCustomer } = useGetCustomer(customerId)

    const bonusTotalAmount = () => {
        if (!branchInfo) {
            return
        }

        const chosenProductsID = chosenProducts.map((chosenProduct) => chosenProduct.node.id)
        const bonuses = branchInfo.branchProducts.items.filter((branchProduct) =>
            chosenProductsID.includes(branchProduct.productId)
        )

        // eslint-disable-next-line
        const bonusesArray = chosenProducts.map((chosenProduct) => {
            for (let i = 0; i < bonuses.length; i++) {
                if (bonuses[i].productId === chosenProduct.node.id) {
                    return {
                        price: chosenProduct.node.variants.edges[0].node.price,
                        bonus: bonuses[i].tags[0]
                    }
                }
            }
        })

        const totalBonusAmmount = bonusesArray.reduce(
            (total, currentValue) =>
                total + (Number(currentValue.price) * Number(currentValue.bonus)) / 100,
            0
        )

        return totalBonusAmmount
    }

    const submitOrder = () => {
        const data = {
            customerId,
            customAttributes: [
                {
                    key: 'bonusTotalAmount',
                    value: String(bonusTotalAmount())
                },
                {
                    key: 'branchId',
                    value: match.params.branchId
                }
            ],
            products: chosenProducts.map((product) => ({
                quantity: 1,
                title: product.node.title,
                originalUnitPrice: Number(product.node.variants.edges[0].node.price)
            }))
        }
        return sendOrder({ data })
    }

    console.log('Order data', order)

    useEffect(() => {
        if (!order) {
            return
        }
        dispatch({ type: CREATE_ORDER, payload: order.data })
        history.push('/orders')
        return
    }, [order])

    const getBranch = async () => {
        try {
            const fetchedBranch = await API.graphql(
                graphqlOperation(branchByAdminId, {
                    adminId: match.params.adminId
                })
            )
            setBranchInfo(fetchedBranch.data.branchByAdminId.items[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCustomer()
        getBranch()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!customerData) {
            return
        }
        dispatch({ type: GET_CUSTOMER, payload: customerData.data.data.customer })
    }, [customerData])

    const productsTotalPrice = () => {
        const prices = chosenProducts.map((product) =>
            Number(product.node.variants.edges[0].node.price)
        )

        return prices.reduce((total, currentValue) => total + currentValue, 0)
    }

    return (
        customer && (
            <Card title="Customer">
                <Card.Section>
                    <Avatar customer source={customer.image.originalSrc} />
                    <p>
                        {customer.firstName} {customer.lastName}
                    </p>
                </Card.Section>
                <Card.Section title="Contact Information">
                    <p>{customer.email}</p>
                </Card.Section>
                <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Products</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Price</Table.HeaderCell>
                            <Table.HeaderCell>Bonus percentage</Table.HeaderCell>
                            <Table.HeaderCell>Bonus ammount</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {chosenProducts &&
                            chosenProducts.map((product) => (
                                <Table.Row key={product.node.id}>
                                    <Table.Cell>
                                        <Header as="h4" image className="product-header">
                                            <Thumbnail
                                                source={
                                                    product.node.images.edges[0] &&
                                                    product.node.images.edges[0].node.originalSrc
                                                }
                                                size="small"
                                                alt=""
                                            />
                                            <Header.Content>{product.node.title}</Header.Content>
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
                                    <Table.Cell>
                                        {branchInfo &&
                                            branchInfo.branchProducts.items.filter(
                                                (branchProduct) =>
                                                    branchProduct.productId === product.node.id
                                            )[0].tags[0]}
                                        %
                                    </Table.Cell>
                                    <Table.Cell>
                                        {branchInfo &&
                                            toCurrency(
                                                (Number(product.node.variants.edges[0].node.price) *
                                                    Number(
                                                        branchInfo.branchProducts.items.filter(
                                                            (branchProduct) =>
                                                                branchProduct.productId ===
                                                                product.node.id
                                                        )[0].tags[0]
                                                    )) /
                                                    100
                                            )}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                    </Table.Body>
                    <Table.Footer fullWidth>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell />
                            <Table.HeaderCell>
                                Total Products Price: {toCurrency(productsTotalPrice())}
                            </Table.HeaderCell>
                            <Table.HeaderCell />
                            <Table.HeaderCell>
                                Total Bonus Ammount: {toCurrency(bonusTotalAmount())}
                            </Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell />
                            <Table.HeaderCell />
                            <Table.HeaderCell />
                            <Table.HeaderCell>
                                <Button primary onClick={submitOrder}>
                                    Confirm
                                </Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Card>
        )
    )
}

export default Customer
