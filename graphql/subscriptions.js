import gql from 'graphql-tag'

export const onUpdatePaymentSubscription = gql`
    subscription onUpdatePaymentRequest {
        onUpdatePaymentRequest {
            id
            status
        }
    }
`

export const paymentSubscription = gql`
    subscription paymentRequest {
        onCreatePaymentRequest {
            bonusAmount
            createdAt
            customerId
            id
            orderId
            status
            updatedAt
        }
    }
`
