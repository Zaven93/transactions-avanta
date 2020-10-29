const axios = require('axios')
const shopifyRequest = require('../helpers/shopifyRequest')
const CustomerService = require('../services/customer.service')

module.exports = {
    getCustomerById: (req, res) =>
        shopifyRequest(CustomerService.customerById, {
            id: `gid://shopify/Customer/${req.params.id}`
        })
            .then((data) => res.send(data.data))
            .catch((e) => console.log(e))
}
