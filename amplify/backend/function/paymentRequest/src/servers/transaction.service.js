module.exports.createTransaction = /* GraphQL */ `
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
