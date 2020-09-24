import React, { useState, useCallback, useEffect } from 'react'
import gql from 'graphql-tag'
import { API, graphqlOperation } from 'aws-amplify'
import { Table, Icon, Popup, Header } from 'semantic-ui-react'
import { Badge } from '@shopify/polaris'
import { toCurrency, formatDate } from '../utils/helper'
import ProductList from './ProductsList'
import config from '../aws-exports'

API.configure(config)

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

const listPaymentRequest = gql`
    query listPaymentRequest {
        listPaymentRequests(filter: { status: { eq: PENDING } }) {
            items {
                bonusAmount
                createdAt
                customerId
                id
                orderId
                status
                updatedAt
            }
            nextToken
        }
    }
`

const paymentSubscription = gql`
    subscription paymentRequest {
        onCreatePaymentRequest {
            bonusAmount
            createdAt
            customerId
            id
            orderId
            status
            updatedAt
        }
    }
`

const PendingPaymentRequest = ({ createUpdatePaymentSubscription }) => {
    const [paymentRequestId, setPaymentRequestId] = useState('')
    const [active, setActive] = useState(false)
    const [paymentRequestItems, setPaymentRequestItems] = useState([])

    const handleChange = useCallback(() => setActive(!active), [active])

    console.log('Payment request id for decline', paymentRequestId)

    const fetchAcceptedPayments = useCallback(async () => {
        try {
            const res = await API.graphql(graphqlOperation(listPaymentRequest))
            setPaymentRequestItems(res.data.listPaymentRequests.items)
            console.log('Accepted payments', res.data)
        } catch (error) {
            console.log(error)
        }
    }, [createUpdatePaymentSubscription])

    useEffect(() => {
        fetchAcceptedPayments()
    }, [fetchAcceptedPayments])

    const declinePayment = async (paymentId) => {
        try {
            const paymentResponse = await API.graphql(
                graphqlOperation(updatePaymentRequest, {
                    input: {
                        id: paymentId,
                        status: 'DECLINED'
                    }
                })
            )

            console.log('Declined Payment data from lambda', paymentResponse.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Table selectable celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Customer Id</Table.HeaderCell>
                        <Table.HeaderCell>Bonus Amount</Table.HeaderCell>
                        <Table.HeaderCell>Created At</Table.HeaderCell>
                        <Table.HeaderCell>Updated At</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {paymentRequestItems &&
                        paymentRequestItems
                            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
                            .map((item) => (
                                <Table.Row key={item.id}>
                                    <Table.Cell>
                                        <Badge size="small">{item.customerId}</Badge>
                                    </Table.Cell>
                                    <Table.Cell>{toCurrency(item.bonusAmount)}</Table.Cell>
                                    <Table.Cell>{formatDate(item.createdAt)}</Table.Cell>
                                    <Table.Cell>{formatDate(item.updatedAt)}</Table.Cell>
                                    <Table.Cell>
                                        <Badge
                                            size="small"
                                            progress="partiallyComplete"
                                            status="attention">
                                            {item.status}
                                        </Badge>
                                    </Table.Cell>
                                    <Table.Cell className="actions-cell">
                                        <Popup
                                            content="Approve payment"
                                            trigger={
                                                <Icon
                                                    className="accept"
                                                    name="check"
                                                    onClick={() => {
                                                        setPaymentRequestId(item.id)
                                                        handleChange()
                                                    }}
                                                />
                                            }
                                        />
                                        <Popup
                                            content="Decline payment"
                                            trigger={
                                                <Icon
                                                    className="decline"
                                                    name="remove"
                                                    onClick={async () => {
                                                        declinePayment(item.id)
                                                    }}
                                                />
                                            }
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                </Table.Body>
            </Table>
            <ProductList
                paymentRequestId={paymentRequestId}
                active={active}
                handleChange={handleChange}
            />
        </>
    )
}

export default PendingPaymentRequest
