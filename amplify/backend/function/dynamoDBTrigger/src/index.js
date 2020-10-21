const axios = require('axios')
const graphql = require('graphql')
const mutation = require('./graphql/mutation')
const { print } = graphql

const { createDraftOrder, completeOrder, updatePaymentRequest } = mutation
const shopifyBaseUrl = 'https://transactions-avanta.myshopify.com/admin/api/2020-07/graphql.json'
const shopifyAccessToken = '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'
const shopifyPrivateUrl = 'https://transactions-avanta.myshopify.com/admin/api/graphql.json'
const shopifyPrivateToken = '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'
const appsyncBaseUrl =
    'https://uj4dw6bp7ze4zpiifi75rtut7i.appsync-api.us-east-1.amazonaws.com/graphql'
const appsyncApiKey = 'da2-sm7rhutlbrddnlhqm7tiuertxe'

exports.handler = async (event) => {
    //eslint-disable-line
    console.log(JSON.stringify(event, null, 2))

    let dynamoDBStream = {
        paymentRequestId: '',
        NewImage: {
            status: '',
            bonusAmount: '',
            customerId: '',
            products: [],
            customAttributes: []
        },
        OldImage: {
            status: ''
        },
        eventName: ''
    }

    const createOrder = async (orderInput) => {
        try {
            const orderData = await axios({
                url: shopifyBaseUrl,
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': shopifyAccessToken
                },
                data: {
                    query: print(createDraftOrder),
                    variables: {
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
                    }
                }
            })

            console.log('Order data', JSON.stringify(orderData.data))

            const updatedPaymentRequest = await axios({
                url: appsyncBaseUrl,
                method: 'post',
                headers: {
                    'x-api-key': appsyncApiKey
                },
                data: {
                    query: print(updatePaymentRequest),
                    variables: {
                        input: {
                            id: orderInput.paymentRequestId,
                            orderId: orderData.data.data.draftOrderCreate.draftOrder.id
                        }
                    }
                }
            })

            const sendCompleteOrder = await axios({
                url: shopifyPrivateUrl,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': shopifyPrivateToken
                },
                data: {
                    query: print(completeOrder),
                    variables: {
                        id: orderData.data.data.draftOrderCreate.draftOrder.id
                    }
                }
            })
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
            dynamoDBStream.paymentRequestId = record.dynamodb.Keys.id.S
            dynamoDBStream.NewImage.status = record.dynamodb.NewImage
                ? record.dynamodb.NewImage.status.S
                : ''
            dynamoDBStream.OldImage.status = record.dynamodb.OldImage.status.S
            dynamoDBStream.eventName = record.eventName
            dynamoDBStream.NewImage.bonusAmount = record.dynamodb.NewImage
                ? record.dynamodb.NewImage.bonusAmount.N
                : ''
            dynamoDBStream.NewImage.customerId = record.dynamodb.NewImage
                ? record.dynamodb.NewImage.customerId.S
                : ''
            dynamoDBStream.NewImage.products = record.dynamodb.NewImage
                ? record.dynamodb.NewImage.products.L.map((product) => ({
                      originalUnitPrice: product.M.originalUnitPrice.N,
                      quantity: product.M.quantity.N,
                      variantId: product.M.variantId.S
                  }))
                : ''
            dynamoDBStream.NewImage.customAttributes = [
                {
                    key: 'bonusTotalAmount',
                    value: record.dynamodb.NewImage ? record.dynamodb.NewImage.bonusAmount.N : ''
                },
                {
                    key: 'branchId',
                    value: record.dynamodb.NewImage ? record.dynamodb.NewImage.branchId.S : ''
                }
            ]
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
