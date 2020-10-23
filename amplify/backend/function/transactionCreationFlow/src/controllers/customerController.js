const axios = require('axios')
const { shopifyBaseUrl, shopifyAccessToken } = require('../envVariables')

module.exports = {
    getCustomerById: async (req, res) => {
        try {
            const data = await axios({
                method: 'POST',
                url: shopifyBaseUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': shopifyAccessToken
                },
                data: {
                    query: `
                      query Customer($id: ID!){
                      customer(id: $id){
                        firstName
                        lastName
                        email
                        id
                        image(size: 100){
                          originalSrc
                        }
                      }
                    }
                  `,
                    variables: { id: `gid://shopify/Customer/${req.params.id}` }
                }
            })

            res.send(data.data)
        } catch (error) {
            console.log(error)
        }
    }
}
