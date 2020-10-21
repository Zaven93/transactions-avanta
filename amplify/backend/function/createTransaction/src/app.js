const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const productsRoute = require('./routes/productsRoute')
const shopifyRoute = require('./routes/shopifyRoute')
const customerRoute = require('./routes/customerRoute')
const orderRoute = require('./routes/orderRoute')

const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use('/api/products', productsRoute)
app.use('/api/customer', customerRoute)
app.use('/api/order', orderRoute)
app.use('/shopify', shopifyRoute)

module.exports = app
