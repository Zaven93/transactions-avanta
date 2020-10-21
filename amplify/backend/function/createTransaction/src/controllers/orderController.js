const axios = require('axios')
const { shopifyBaseUrl, shopifyAccessToken } = require('../envVariables')

module.exports = {
    createOrder: async (req, res) => {
        try {
            const orderRes = await axios({
                method: 'POST',
                url: shopifyBaseUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': shopifyAccessToken
                },
                data: {
                    query: `
          mutation CreateOrder($input: DraftOrderInput!){
            draftOrderCreate(input: $input){
              draftOrder {
                id
                customer {
                  id
                }
                email
                lineItems(first: 10){
                  edges{
                    node{
                      title
                      quantity
                      originalUnitPrice
                    }
                  }
                }
              }
            }
          }

        `,
                    variables: {
                        input: {
                            customerId: `gid://shopify/Customer/${req.body.customerId}`,
                            taxExempt: true,
                            lineItems: req.body.products,
                            customAttributes: req.body.customAttributes
                        }
                    }
                }
            })

            const order = orderRes.data

            const sendCompleteOrder = await axios({
                url: shopifyBaseUrl,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': shopifyAccessToken
                },
                data: {
                    query: `
                    mutation CompleteOrder($id: ID!){
                    draftOrderComplete(id: $id, paymentPending:true){
                        draftOrder{
                          customer {
                            id
                          }
                          email
                          name
                        }
                      }
                    }
        `,
                    variables: {
                        id: order.data.draftOrderCreate.draftOrder.id
                    }
                }
            })

            res.send(sendCompleteOrder.data)
        } catch (error) {
            console.log(error)
        }
    }
}
