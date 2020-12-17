import React, { useState, useCallback, useEffect, useRef } from 'react'
import {
    Card,
    Page,
    PageActions,
    Icon,
    Button,
    Stack,
    DataTable,
    Thumbnail
} from '@shopify/polaris'
import QRCode from 'qrcode.react'
import { API, graphqlOperation } from 'aws-amplify'
import { Redirect } from '@shopify/app-bridge/actions'
import createApp from '@shopify/app-bridge'
import { Table, Header } from 'semantic-ui-react'
import { SearchMajorMonotone } from '@shopify/polaris-icons'
import { useGetShopifyCustomer } from '../core/hooks'
import PaymentRequest from './PaymentRequest'
import ProductsList from './ProductsList'
import OrderProductItem from './OrderProductItem'
import { useCreateOrder, useUpdatePaymentRequest } from '../core/hooks'
import { toCurrency } from '../utils/helper'
import { getUserByCustomerId } from '../graphql/queries'
import { updateUser } from '../graphql/mutation'

const CreateOrder = ({ setShowCreateOrder, branchId, user, branchData }) => {
    const [searchValue, setSearchValue] = useState(null)
    const [orderProducts, setOrderProducts] = useState([])
    const [active, setActive] = useState(false)
    const [updateQuantity, setUpdateQuantity] = useState(null)
    const [saveOrder, setSaveOrder] = useState(false)
    const [customerId, setCustomerId] = useState('')
    const [paymentRequestItem, setPaymentRequestItem] = useState(null)
    const [rejectedPaymentRequestItems, setRejectedPaymentRequestItems] = useState([])
    const [bonusAmount, setBonusAmount] = useState(0)
    const [orderId, setOrderId] = useState('')
    const [rowId, setRowId] = useState([])
    const [state, setState] = useState({
        products: []
    })

    const {
        data: customerData,
        error: customerError,
        refetch: getCustomer
    } = useGetShopifyCustomer(customerId)

    const { createOrder } = useCreateOrder()

    const { updatePaymentRequest } = useUpdatePaymentRequest()

    const handleChange = useCallback(() => setActive(!active), [active])

    const handleSearchInput = useCallback((newValue) => setSearchValue(newValue), [])

    const handleQuantity = (e) => setUpdateQuantity(e.target.value)

    const inputRef = useRef()

    const app = createApp({
        apiKey: 'cb7879ce44f538b136e4da86bc6f612c',
        shopOrigin: 'avanta-clinics.myshopify.com'
    })

    const redirect = Redirect.create(app)

    useEffect(() => {
        if (active === false && searchValue) {
            setTimeout(() => inputRef.current && inputRef.current.focus(), 300)
        }
    }, [active])

    useEffect(() => {
        if (!customerId) {
            return
        }
        getCustomer()
    }, [customerId])

    const rows = [
        [
            'Subtotal',
            toCurrency(
                orderProducts.reduce(
                    (accumulator, currentValue) =>
                        accumulator + Number(currentValue.price * currentValue.quantity),
                    0
                )
            )
        ],
        [
            'Customer bonus amount',
            toCurrency(
                orderProducts.reduce(
                    (accumulator, currentValue) =>
                        accumulator +
                        Number(currentValue.price * currentValue.quantity * currentValue.bonus) /
                            100,
                    0
                )
            )
        ],
        [
            'Payed with bonus',
            paymentRequestItem !== null ? (
                toCurrency(bonusAmount)
            ) : (
                <input
                    className="payed-with-bonus-input"
                    min={0}
                    max={100}
                    value={bonusAmount}
                    type="number"
                    onChange={(e) => {
                        if (e.target.value === '-') {
                            return (e.target.value = 1)
                        }
                        setBonusAmount(parseInt(e.target.value, 10))
                    }}
                    onBlur={(e) => {
                        if (e.target.value === '') {
                            return setBonusAmount(0)
                        }
                    }}
                />
            )
        ]
    ]

    const comparePrevAndNextState = (newValue) => {
        const prevState = searchValue
        if (searchValue && searchValue.length > newValue.length) {
            return setActive(false)
        } else {
            return setActive(true)
        }
    }

    const declinePayment = (items) =>
        Promise.all(
            items.map(async (id) => {
                try {
                    await updatePaymentRequest({
                        paymentId: id,
                        status: 'DECLINED'
                    })
                } catch (error) {
                    console.log(error)
                }
            })
        )

    const acceptPayment = async (item, orderProducts) => {
        try {
            const orderId = await createOrder({
                input: {
                    customerId: item.customerId,
                    lineItems: orderProducts.map((orderProduct) => ({
                        quantity: orderProduct.quantity,
                        variantId: orderProduct.variantId
                    })),
                    customAttributes: [
                        {
                            key: 'bonusTotalAmount',
                            value: String(bonusAmount)
                        },
                        {
                            key: 'branchId',
                            value: item.branchId
                        },
                        {
                            key: 'accumulatedBonusAmount',
                            value: String(
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
                            )
                        }
                    ]
                }
            })

            await setOrderId(
                orderId.data.draftOrderComplete.draftOrder.order.id.split('Order').slice(1).join('')
            )

            await updatePaymentRequest({
                paymentId: item.id,
                bonusAmount: parseInt(
                    orderProducts.reduce(
                        (accumulator, currentValue) =>
                            accumulator +
                            Number(
                                currentValue.price * currentValue.quantity * currentValue.bonus
                            ) /
                                100,
                        0
                    ),
                    10
                ),
                amount: bonusAmount,
                orderId: orderId.data.draftOrderComplete.draftOrder.order.id,
                status: 'APPROVED'
            })

            await Promise.all(
                rejectedPaymentRequestItems.map(async (rejectedItem) => {
                    try {
                        await updatePaymentRequest({
                            paymentId: rejectedItem,
                            status: 'DECLINED'
                        })
                    } catch (error) {
                        console.log(error)
                    }
                })
            )

            const userId = await API.graphql(
                graphqlOperation(getUserByCustomerId, {
                    shopifyCustomerId: item.customerId
                })
            )

            const updatedUser = await API.graphql(
                graphqlOperation(updateUser, {
                    input: {
                        id: userId.data.userByCustomerId.items[0].id,
                        bonusAmount:
                            userId.data.userByCustomerId.items[0].bonusAmount -
                            bonusAmount +
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

            setShowCreateOrder(false)

            redirect.dispatch(Redirect.Action.ADMIN_PATH, {
                path: `/orders${orderId.data.draftOrderComplete.draftOrder.order.id
                    .split('Order')
                    .slice(1)
                    .join('')}?orderListBeta=true`,
                newContext: true
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Page
            primaryAction={{ content: 'QR Code', onAction: () => downloadQR() }}
            fullWidth
            breadcrumbs={[{ content: 'Branch Data', onAction: () => setShowCreateOrder(false) }]}
            title="Create order">
            <Stack>
                <Stack.Item fill>
                    <Card title="Order details">
                        <Card.Section>
                            <Stack>
                                <Stack.Item fill>
                                    <div className="search-order-products-input">
                                        <Icon source={SearchMajorMonotone} />
                                        <input
                                            value={searchValue}
                                            onChange={(e) => {
                                                comparePrevAndNextState(e.target.value)
                                                setSearchValue(e.target.value)
                                            }}
                                            ref={inputRef}
                                            disabled={paymentRequestItem !== null}
                                        />
                                    </div>
                                </Stack.Item>
                                <Stack.Item>
                                    <Button
                                        onClick={() => setActive(true)}
                                        disabled={paymentRequestItem !== null}>
                                        Browse products
                                    </Button>
                                </Stack.Item>
                            </Stack>
                        </Card.Section>
                        <Card.Section>
                            {orderProducts &&
                                orderProducts.map((orderProduct) => (
                                    <OrderProductItem
                                        state={state}
                                        setState={setState}
                                        rowId={rowId}
                                        setRowId={setRowId}
                                        paymentRequestItem={paymentRequestItem}
                                        orderProducts={orderProducts}
                                        setOrderProducts={setOrderProducts}
                                        orderProduct={orderProduct}
                                    />
                                ))}
                        </Card.Section>
                        <Card.Section>
                            <DataTable
                                columnContentTypes={[
                                    'text',
                                    'numeric',
                                    'numeric',
                                    'numeric',
                                    'numeric'
                                ]}
                                headings={[]}
                                rows={rows}
                                totals={[
                                    '',
                                    toCurrency(
                                        orderProducts.reduce(
                                            (accumulator, currentValue) =>
                                                accumulator +
                                                Number(currentValue.price * currentValue.quantity),
                                            0
                                        ) - parseInt(bonusAmount ? bonusAmount : 0, 10)
                                    )
                                ]}
                                showTotalsInFooter
                            />
                        </Card.Section>
                    </Card>
                </Stack.Item>
                <Stack.Item>
                    <Card title="Customer information">
                        <Card.Section title="full name">
                            {customerData &&
                            customerData.data.data.customer.firstName &&
                            customerData.data.data.customer.lastName ? (
                                <h3>
                                    {customerData.data.data.customer.firstName +
                                        ' ' +
                                        customerData.data.data.customer.lastName}
                                </h3>
                            ) : (
                                <h3>-</h3>
                            )}
                        </Card.Section>
                        <Card.Section title="phone number">
                            {customerData && customerData.data.data.customer.phone ? (
                                <h3>{customerData.data.data.customer.phone}</h3>
                            ) : (
                                <h3>-</h3>
                            )}
                        </Card.Section>
                    </Card>
                </Stack.Item>
            </Stack>
            <PaymentRequest
                rejectedPaymentRequestItems={rejectedPaymentRequestItems}
                setRejectedPaymentRequestItems={setRejectedPaymentRequestItems}
                paymentRequestItem={paymentRequestItem}
                setPaymentRequestItem={setPaymentRequestItem}
                setBonusAmount={setBonusAmount}
                setCustomerId={setCustomerId}
                orderProducts={orderProducts}
                branchId={branchId}
            />
            <ProductsList
                state={state}
                setState={setState}
                rowId={rowId}
                setRowId={setRowId}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                handleSearchInput={handleSearchInput}
                branchData={branchData}
                user={user}
                orderProducts={orderProducts}
                setOrderProducts={setOrderProducts}
                active={active}
                handleChange={handleChange}
            />
            <div className="page-actions">
                <PageActions
                    primaryAction={{
                        content: 'Submit order',
                        onAction:
                            paymentRequestItem === null && rejectedPaymentRequestItems.length > 0
                                ? () => declinePayment(rejectedPaymentRequestItems)
                                : () => acceptPayment(paymentRequestItem, orderProducts),
                        disabled:
                            rejectedPaymentRequestItems.length <= 0 && paymentRequestItem === null
                    }}
                />
            </div>
        </Page>
    )
}

export default CreateOrder
