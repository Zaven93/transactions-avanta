const axios = require('axios')
const graphql = require('graphql')
const { print } = graphql
const query = require('./graphql/queries')
const mutation = require('./graphql/mutation')

const { createTransaction } = mutation
const { getProductById } = query
const shopifyBaseUrl = 'https://transactions-avanta.myshopify.com/admin/api/2020-07/graphql.json'
const shopifyAccessToken = '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'
const appsyncBaseUrl =
    'https://uj4dw6bp7ze4zpiifi75rtut7i.appsync-api.us-east-1.amazonaws.com/graphql'
const appsyncApiKey = 'da2-sm7rhutlbrddnlhqm7tiuertxe'

exports.handler = async (event) => {
    try {
        console.log('request: ' + JSON.stringify(event))
        let response = {
            statusCode: 200,
            body: JSON.parse(event.body)
        }

        console.log('response: ' + JSON.stringify(response.body))

        let transaction = {
            id: response.body.id,
            totalPrice: response.body.total_price,
            totalBonusAmount: response.body.note_attributes.filter(
                (item) => item.name === 'bonusTotalAmount'
            )[0].value,
            branchId: response.body.note_attributes.filter((item) => item.name === 'branchId')[0]
                .value,
            sortDate: new Date().toISOString(),
            note: response.body.note,
            currency: response.body.currency,
            products: [],
            customer: {
                id: response.body.customer.id,
                firstName: response.body.customer.first_name,
                lastName: response.body.customer.last_name,
                email: response.body.customer.email,
                phone: response.body.customer.phone
            }
        }

        console.log('Transasction data', JSON.stringify(transaction))

        if (transaction) {
            const orderData = await axios({
                url: shopifyBaseUrl,
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': shopifyAccessToken
                },
                data: {
                    query: print(getProductById),
                    variables: {
                        id: `gid://shopify/Order/${JSON.stringify(transaction.id)}`
                    }
                }
            })

            console.log('Order data', JSON.stringify(orderData.data))

            transaction.products = orderData.data.data.order.lineItems.edges.map((product) => ({
                id: product.node.id,
                title: product.node.title,
                bonusPercentage: product.node.product ? product.node.product.tags[0] : null,
                priceAmount: product.node.originalUnitPriceSet.shopMoney.amount,
                priceCurrency: product.node.originalUnitPriceSet.shopMoney.currencyCode,
                image: product.node.image ? product.node.image.originalSrc : null
            }))

            console.log('Updated transaction', JSON.stringify(transaction))

            const transactionData = await axios({
                url: appsyncBaseUrl,
                method: 'post',
                headers: {
                    'x-api-key': appsyncApiKey
                },
                data: {
                    query: print(createTransaction),
                    variables: {
                        input: {
                            id: transaction.id,
                            totalPrice: transaction.totalPrice,
                            totalBonusAmount: transaction.totalBonusAmount,
                            branchId: transaction.branchId,
                            note: transaction.note,
                            currency: transaction.currency,
                            sortDate: transaction.sortDate,
                            products: transaction.products.map((product) => ({
                                id: product.id,
                                title: product.title,
                                bonusPercentage: product.bonusPercentage,
                                priceAmount: product.priceAmount,
                                priceCurrency: product.priceCurrency,
                                image: product.image
                            })),
                            customer: {
                                id: transaction.customer.id,
                                firstName: transaction.customer.firstName,
                                lastName: transaction.customer.lastName,
                                email: transaction.customer.email,
                                phone: transaction.customer.phone
                            }
                        }
                    }
                }
            })

            console.log('Created transaction', JSON.stringify(transactionData.data))
        } else {
            console.log('Some error occured')
        }
    } catch (err) {
        console.log('error creating todo: ', err)
    }
}
