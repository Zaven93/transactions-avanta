const axios = require('axios')

module.exports = (query, variables) =>
    axios({
        url: process.env.SHOPIFY_BASE_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
        },
        data: {
            query,
            variables
        }
    })
