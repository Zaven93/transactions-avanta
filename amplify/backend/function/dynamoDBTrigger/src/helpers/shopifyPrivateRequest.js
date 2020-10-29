const axios = require('axios')

module.exports = (query, variables) =>
    axios({
        url: process.env.SHOPIFY_PRIVATE_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_PRIVATE_TOKEN
        },
        data: {
            query,
            variables
        }
    })
