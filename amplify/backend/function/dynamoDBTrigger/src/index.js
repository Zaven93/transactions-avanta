const appsyncRequest = require('./helpers/appsyncRequest')
const shopifyRequest = require('./helpers/shopifyRequest')
const shopifyPrivateRequest = require('./helpers/shopifyPrivateRequest')
const OrderService = require('./servers/order.service')
const PaymentService = require('./servers/payment.service')
const { createDynamoDBStream, updateDynamoDBStream } = require('./helpers/build')

exports.handler = async (event) => {
    //eslint-disable-line
    console.log(JSON.stringify(event, null, 2))

    let dynamoDBStream = createDynamoDBStream()

    const createOrder = async (orderInput) => {
        try {
            const orderData = await shopifyRequest(OrderService.createOrder, {
                input: {
                    customerId: `gid://shopify/Customer/${orderInput.NewImage.customerId}`,
                    taxExempt: true,
                    customAttributes: orderInput.NewImage.customAttributes,
                    lineItems: orderInput.NewImage.products.map((product) => ({
                        quantity: Number(product.quantity),
                        originalUnitPrice: Number(product.originalUnitPrice),
                        variantId: product.variantId
                    })),
                    note: `${orderInput.NewImage.bonusAmount} amount of bonus has been paid for these products`
                }
            })

            console.log('Order data', JSON.stringify(orderData.data))

            await appsyncRequest(PaymentService.updatePaymentRequest, {
                input: {
                    id: orderInput.paymentRequestId,
                    orderId: orderData.data.data.draftOrderCreate.draftOrder.id
                }
            })

            await shopifyPrivateRequest(OrderService.completeOrder, {
                id: orderData.data.data.draftOrderCreate.draftOrder.id
            })

            return
        } catch (error) {
            console.log(error)
        }
    }

    event.Records.forEach((record) => {
        console.log(record.eventID)
        console.log(record.eventName)
        if (record.eventName === 'REMOVE') {
            return
        }

        console.log('DynamoDB Record: %j', record.dynamodb)

        if (record.dynamodb.NewImage && record.dynamodb.NewImage.status.S === 'APPROVED') {
            return updateDynamoDBStream(dynamoDBStream, record)
        }
    })

    if (
        dynamoDBStream.eventName === 'MODIFY' &&
        dynamoDBStream.NewImage.status === 'APPROVED' &&
        dynamoDBStream.NewImage.status !== dynamoDBStream.OldImage.status
    ) {
        return createOrder(dynamoDBStream)
    }
}
