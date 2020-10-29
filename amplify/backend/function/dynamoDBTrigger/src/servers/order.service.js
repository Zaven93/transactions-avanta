module.exports.createOrder = /* GraphQL */ `
    mutation createDraftOrder($input: DraftOrderInput!) {
        draftOrderCreate(input: $input) {
            draftOrder {
                id
                note2
                lineItems(first: 5) {
                    edges {
                        node {
                            variant {
                                id
                                price
                                title
                                product {
                                    tags
                                    title
                                    images(first: 5) {
                                        edges {
                                            node {
                                                originalSrc
                                            }
                                        }
                                    }
                                }
                            }
                            name
                            quantity
                        }
                    }
                }
            }
        }
    }
`

module.exports.completeOrder = /* GraphQL */ `
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
