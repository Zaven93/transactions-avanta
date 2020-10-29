const appsyncRequest = require('./helpers/appsyncRequest')
const shopifyRequest = require('./helpers/shopifyRequest')
const ProductService = require('./servers/product.service')
const TransactionService = require('./servers/transaction.service')
const { transactionEntity, productEntity, transactionInput } = require('./helpers/build')

exports.handler = async (event) => {
    console.log('request: ' + JSON.stringify(event))
    let response = {
        statusCode: 200,
        body: JSON.parse(JSON.stringify(event))
    }

    console.log('response: ' + JSON.stringify(response.body))

    let transaction = transactionEntity(response.body)

    if (transaction) {
        return shopifyRequest(ProductService.getProductById, {
            id: `gid://shopify/Order/${JSON.stringify(transaction.id)}`
        })
            .then((orderData) => {
                console.log('Order data', JSON.stringify(orderData.data))

                transaction.products = orderData.data.data.order.lineItems.edges.map((product) =>
                    productEntity(product.node)
                )

                console.log('Updated transaction', JSON.stringify(transaction))
            })
            .then(() =>
                appsyncRequest(TransactionService.createTransaction, {
                    input: transactionInput(transaction)
                })
            )
            .then((transactionData) =>
                console.log('Created transaction', JSON.stringify(transactionData.data))
            )
            .catch((e) => console.log(e))
    } else {
        console.log('Some error occured')
    }
}
