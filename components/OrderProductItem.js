import React, { useCallback, useState } from 'react'
import { Card, Thumbnail, Stack, TextField } from '@shopify/polaris'
import { Icon, Popup, Header } from 'semantic-ui-react'
import { toCurrency } from '../utils/helper'

const OrderProductItem = ({
    state,
    setState,
    rowId,
    setRowId,
    orderProducts,
    setOrderProducts,
    orderProduct,
    paymentRequestItem
}) => {
    const [productQuantity, setProductQuantity] = useState(1)

    const removeProduct = (id) => {
        const updatedProducts = orderProducts.filter((orderProduct) => orderProduct.id !== id)

        return setOrderProducts(updatedProducts)
    }

    return (
        <Card.Subsection id="subsection" key={orderProduct.id}>
            <Stack distribution="fill">
                <Stack.Item>
                    <Header as="h3" image className="product-header">
                        <Thumbnail source={orderProduct.image} size="medium" alt="" />
                        <Header.Content>{orderProduct.title}</Header.Content>
                    </Header>
                </Stack.Item>
                <Stack.Item>
                    <div
                        className="quantity-input"
                        style={{
                            display: 'flex'
                        }}>
                        <p>{toCurrency(orderProduct.price)}</p>{' '}
                        <span style={{ marginLeft: 10, marginRight: 10 }}>x</span>
                        {paymentRequestItem ? (
                            <p>{orderProduct.quantity}</p>
                        ) : (
                            <input
                                style={{ width: '60px' }}
                                value={productQuantity}
                                type="number"
                                min={1}
                                max={100}
                                onChange={(e) => {
                                    console.log('Input value', e.target.value)
                                    console.log('Type of input value', typeof e.target.value)
                                    if (e.target.value === '0') {
                                        return (e.target.value = 1)
                                    }
                                    setProductQuantity(parseInt(e.target.value, 10))
                                }}
                                onBlur={(e) => {
                                    if (e.target.value === '') {
                                        return (e.target.value = 1)
                                    }
                                    const updateIndex = orderProducts.findIndex(
                                        (product) => product.id === orderProduct.id
                                    )

                                    setOrderProducts(
                                        orderProducts.map((product) => {
                                            if (product.id === orderProduct.id) {
                                                return {
                                                    ...product,
                                                    quantity: productQuantity
                                                }
                                            }

                                            return product
                                        })
                                    )
                                }}
                            />
                        )}
                    </div>
                </Stack.Item>
                <Stack.Item>
                    <p>
                        {toCurrency(
                            productQuantity
                                ? orderProduct.price * productQuantity
                                : orderProduct.price
                        )}
                    </p>
                </Stack.Item>
                <Stack.Item>
                    <p>{orderProduct.bonus}%</p>
                </Stack.Item>
                {!paymentRequestItem && (
                    <Stack.Item>
                        <Popup
                            content="Remove product"
                            trigger={
                                <Icon
                                    className="decline"
                                    name="remove"
                                    onClick={() => {
                                        removeProduct(orderProduct.id)
                                        setRowId(rowId.filter((id) => id !== orderProduct.id))
                                        setState({
                                            products: state.products.filter(
                                                (product) => product.node.id !== orderProduct.id
                                            )
                                        })
                                    }}
                                />
                            }
                        />
                    </Stack.Item>
                )}
            </Stack>
        </Card.Subsection>
    )
}

export default OrderProductItem
