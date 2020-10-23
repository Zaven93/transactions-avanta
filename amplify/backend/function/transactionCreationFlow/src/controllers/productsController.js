const axios = require('axios')
const { shopifyBaseUrl, shopifyAccessToken } = require('../envVariables')

module.exports = {
    getProducts: async (req, res) => {
        try {
            const result = await axios({
                method: 'POST',
                url: shopifyBaseUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': shopifyAccessToken
                },
                data: {
                    query: `{
            products(first: 7){
              pageInfo{
                hasNextPage
                hasPreviousPage
              }
                edges{
                  cursor
                  node{
                    description(truncateAt: 100)
                    id
                    tags
                    title
                    variants(first:1){
                      edges{
                        node{
                          price
                        }
                      }
                    }
                    images(first:1){
                      edges{
                        node{
                          originalSrc
                        }
                      }
                    }
                  }
                }
              }
 }`
                }
            })

            res.send(result.data)
        } catch (error) {
            console.log(error)
        }
    },

    productsNext: async (req, res) => {
        const nextCursor = req.body.nextCursor
        try {
            const result = await axios({
                method: 'POST',
                url: shopifyBaseUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': shopifyAccessToken
                },
                data: {
                    query: `
      query nextProducts($cursor: String){
      products(first: 7, after: $cursor){
        pageInfo{
          hasNextPage
          hasPreviousPage
        }
          edges{
            cursor
            node{
              description(truncateAt: 100)
              id
              tags
              title
              variants(first:1){
                edges{
                  node{
                    price
                  }
                }
              }
              images(first:1){
                edges{
                  node{
                    originalSrc
                  }
                }
              }
            }
          }
        }
      }`,
                    variables: { cursor: nextCursor }
                }
            })
            res.send(result.data)
        } catch (error) {
            console.log(error)
        }
    },

    productsPrevious: async (req, res) => {
        const previousCursor = req.body.previousCursor
        console.log('Next cursor from request', previousCursor)
        try {
            const result = await axios({
                method: 'POST',
                url: shopifyBaseUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': shopifyAccessToken
                },
                data: {
                    query: `
                  query previousProducts($cursor: String){
                  products(first: 7, before: $cursor){
                    pageInfo{
                      hasNextPage
                      hasPreviousPage
                    }
                      edges{
                        cursor
                        node{
                          description(truncateAt: 100)
                          id
                          tags
                          title
                          variants(first:1){
                            edges{
                              node{
                                price
                              }
                            }
                          }
                          images(first:1){
                            edges{
                              node{
                                originalSrc
                              }
                            }
                          }
                        }
                      }
                    }
                  }`,
                    variables: { cursor: previousCursor }
                }
            })
            res.send(result.data)
        } catch (error) {
            console.log(error)
        }
    }
}
