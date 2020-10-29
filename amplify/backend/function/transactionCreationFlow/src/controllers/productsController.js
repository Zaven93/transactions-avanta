const axios = require('axios')
const shopifyRequest = require('../helpers/shopifyRequest')
const ProductService = require('../services/product.service')

module.exports = {
    getProducts: (req, res) =>
        shopifyRequest(ProductService.getProducts)
            .then((result) => res.send(result.data))
            .catch((e) => console.log(e)),

    productsNext: (req, res) =>
        shopifyRequest(ProductService.nextProducts, { cursor: req.body.nextCursor })
            .then((result) => res.send(result.data))
            .catch((e) => console.log(e)),

    productsPrevious: (req, res) =>
        shopifyRequest(ProductService.previousProducts, { cursor: req.body.previousCursor })
            .then((result) => res.send(result.data))
            .catch((e) => console.log(e))
}
