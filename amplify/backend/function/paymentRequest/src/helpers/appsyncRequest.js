const axios = require('axios')

module.exports = (query, variables) =>
    axios({
        url: process.env.APPSYNC_BASE_URL,
        method: 'POST',
        headers: {
            'x-api-key': process.env.APPSYNC_API_KEY
        },
        data: {
            query,
            variables
        }
    })
