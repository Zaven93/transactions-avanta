const gql = require('graphql-tag')

const createDraftOrder = gql`
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

const completeOrder = gql`
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

const updatePaymentRequest = gql`
    mutation updatePaymentRequest($input: UpdatePaymentRequestInput!) {
        updatePaymentRequest(input: $input) {
            id
            orderId
        }
    }
`

module.exports = {
    createDraftOrder,
    completeOrder,
    updatePaymentRequest
}
