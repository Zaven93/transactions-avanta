import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { API, graphqlOperation } from 'aws-amplify'
import { Table, Icon, Popup, Header } from 'semantic-ui-react'
import { Badge } from '@shopify/polaris'
import {
    useFetchPaymentRequest,
    useUpdatePaymentRequest,
    useCreateOrder,
    useGetShopifyCustomer
} from '../core/hooks'
import { toCurrency, formatDate } from '../utils/helper'
import ProductList from './ProductsList'
import { updatePaymentRequest } from '../graphql/mutation'
import { listPaymentRequest, getUserByCustomerId } from '../graphql/queries'
import { paymentSubscription } from '../graphql/subscriptions'
import { createDraftOrder, updateUser } from '../graphql/mutation'

const PendingPaymentRequest = ({
    rejectedPaymentRequestItems,
    setRejectedPaymentRequestItems,
    paymentRequestItem,
    setPaymentRequestItem,
    createUpdatePaymentSubscription,
    branchId,
    orderProducts,
    setCustomerId,
    setBonusAmount
}) => {
    const [paymentRequestId, setPaymentRequestId] = useState('')
    const [active, setActive] = useState(false)
    const [paymentRequestItems, setPaymentRequestItems] = useState([])
    const [acceptedPaymentRequestId, setAcceptedPaymentRequestId] = useState('')
    const [rejectedPaymentRequestId, setRejectedPaymentRequestId] = useState([])
    const { data: paymentRequests, refetch: getPaymentRequests } = useFetchPaymentRequest(
        branchId,
        'PENDING'
    )
    const { updatePaymentRequest } = useUpdatePaymentRequest()

    const { createOrder } = useCreateOrder()

    const handleChange = useCallback(() => setActive(!active), [active])

    useEffect(() => {
        getPaymentRequests()
    }, [branchId, createUpdatePaymentSubscription])

    useEffect(() => {
        setPaymentRequestItems(paymentRequests && paymentRequests.data.listPaymentRequests.items)
    }, [paymentRequests])

    const declinePayment = (paymentId) => {
        updatePaymentRequest({ paymentId, status: 'DECLINED' })
    }

    const acceptPayment = async (item, orderProducts) => {
        try {
            setCustomerId(item.customerId)

            setBonusAmount(item.amount)

            const orderId = await createOrder({
                input: {
                    customerId: item.customerId,
                    lineItems: orderProducts.map((orderProduct) => ({
                        quantity: orderProduct.quantity,
                        variantId: orderProduct.variantId
                    }))
                }
            })

            await updatePaymentRequest({
                paymentId: item.id,
                orderId: orderId.data.draftOrderComplete.draftOrder.order.id,
                status: 'APPROVED'
            })

            const userId = await API.graphql(
                graphqlOperation(getUserByCustomerId, {
                    shopifyCustomerId: item.customerId
                })
            )

            console.log('User id from pending payments', userId)

            const updatedUser = await API.graphql(
                graphqlOperation(updateUser, {
                    input: {
                        id: userId.data.userByCustomerId.items[0].id,
                        bonusAmount:
                            userId.data.userByCustomerId.items[0].bonusAmount -
                            item.amount +
                            orderProducts.reduce(
                                (accumulator, currentValue) =>
                                    accumulator +
                                    Number(
                                        currentValue.price *
                                            currentValue.quantity *
                                            currentValue.bonus
                                    ) /
                                        100,
                                0
                            )
                    }
                })
            )

            console.log('Updated user', updatedUser)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign="center">Customer Info</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Created At</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Creation time</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Status</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {paymentRequestItems &&
                        paymentRequestItems
                            .sort((a, b) =>
                                a.createdAt.match(/\d\d:\d\d:\d\d/)[0] >
                                b.createdAt.match(/\d\d:\d\d:\d\d/)[0]
                                    ? -1
                                    : a.createdAt.match(/\d\d:\d\d:\d\d/)[0] <
                                      b.createdAt.match(/\d\d:\d\d:\d\d/)[0]
                                    ? 1
                                    : 0
                            )
                            .map((item) => (
                                <Table.Row
                                    key={item.id}
                                    style={{
                                        background:
                                            paymentRequestItem && paymentRequestItem.id === item.id
                                                ? '#F8FFEE'
                                                : rejectedPaymentRequestItems.includes(item.id)
                                                ? '#FAEEED'
                                                : ''
                                    }}>
                                    <Table.Cell textAlign="center">
                                        <Badge size="small">{item.fullName}</Badge>
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        {formatDate(item.createdAt)}
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        {item.createdAt.match(/\d\d:\d\d:\d\d/)[0]}
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Badge
                                            size="small"
                                            progress="partiallyComplete"
                                            status="attention">
                                            {item.status}
                                        </Badge>
                                    </Table.Cell>
                                    <Table.Cell textAlign="center" className="actions-cell">
                                        <Popup
                                            content="Approve payment"
                                            trigger={
                                                <Icon
                                                    className="accept"
                                                    name="check"
                                                    onClick={() => {
                                                        setCustomerId(item.customerId)
                                                        setPaymentRequestItem(item)
                                                        setRejectedPaymentRequestItems(
                                                            rejectedPaymentRequestItems.filter(
                                                                (rejectedItem) =>
                                                                    rejectedItem !== item.id
                                                            )
                                                        )
                                                    }}
                                                    disabled={
                                                        orderProducts.length <= 0 ||
                                                        (paymentRequestItem &&
                                                            paymentRequestItem.id === item.id)
                                                    }
                                                />
                                            }
                                        />
                                        <Popup
                                            content="Decline payment"
                                            trigger={
                                                <Icon
                                                    className="decline"
                                                    name="remove"
                                                    onClick={() => {
                                                        if (
                                                            paymentRequestItem &&
                                                            paymentRequestItem.id === item.id
                                                        ) {
                                                            setPaymentRequestItem(null)
                                                        }

                                                        if (
                                                            !rejectedPaymentRequestItems.includes(
                                                                item.id
                                                            )
                                                        ) {
                                                            setRejectedPaymentRequestItems([
                                                                ...rejectedPaymentRequestItems,
                                                                item.id
                                                            ])
                                                        }
                                                    }}
                                                    disabled={rejectedPaymentRequestItems.includes(
                                                        item.id
                                                    )}
                                                />
                                            }
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                </Table.Body>
            </Table>
        </>
    )
}

export default PendingPaymentRequest
