const gql = require('graphql-tag')

const createTransaction = gql`
    mutation createTransaction($input: CreateTransactionInput!) {
        createTransaction(input: $input) {
            id
            note
            totalPrice
            currency
            products {
                id
                title
                bonusPercentage
                priceAmount
                priceCurrency
                image
            }
            customer {
                id
                firstName
                lastName
                phone
                email
            }
        }
    }
`

module.exports = {
    createTransaction
}
