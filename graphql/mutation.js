import gql from 'graphql-tag'

const createDraftOrder = gql`
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
                        }
                    }
                }
            }
        }
    }
`

export const completeOrder = gql`
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

export const updatePaymentRequest = gql`
    mutation updatePaymentRequest($input: UpdatePaymentRequestInput!) {
        updatePaymentRequest(input: $input) {
            bonusAmount
            customerId
            id
            orderId
            status
            products {
                originalUnitPrice
                quantity
                variantId
            }
            createdAt
            updatedAt
        }
    }
`
