module.exports.createDraftOrder = /* GraphQL */ `
    mutation CreateOrder($input: DraftOrderInput!) {
        draftOrderCreate(input: $input) {
            draftOrder {
                id
                customer {
                    id
                }
                email
                lineItems(first: 10) {
                    edges {
                        node {
                            title
                            quantity
                            originalUnitPrice
                        }
                    }
                }
            }
        }
    }
`

module.exports.markDraftOrderComplete = /* GraphQL */ `
    mutation CompleteOrder($id: ID!) {
        draftOrderComplete(id: $id, paymentPending: true) {
            draftOrder {
                customer {
                    id
                }
                email
                name
            }
        }
    }
`
