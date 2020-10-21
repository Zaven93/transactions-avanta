const gql = require('graphql-tag')

const getProductById = gql`
    query Order($id: ID!) {
        order(id: $id) {
            id
            name
            email
            lineItems(first: 5) {
                edges {
                    node {
                        id
                        image {
                            originalSrc
                        }
                        quantity
                        name
                        title
                        product {
                            tags
                        }
                        originalUnitPriceSet {
                            shopMoney {
                                amount
                                currencyCode
                            }
                        }
                    }
                }
            }
            customer {
                firstName
                lastName
                email
                phone
                id
            }
        }
    }
`
module.exports = {
    getProductById
}
