const axios = require('axios')

module.exports = (query, variables) =>
    axios({
        method: 'POST',
        url: process.env.SHOPIFY_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
        },
        data: {
            query,
            variables
        }
    })
