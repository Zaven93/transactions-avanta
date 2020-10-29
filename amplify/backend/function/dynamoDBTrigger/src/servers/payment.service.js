module.exports.updatePaymentRequest = /* GraphQL */ `
    mutation updatePaymentRequest($input: UpdatePaymentRequestInput!) {
        updatePaymentRequest(input: $input) {
            id
            orderId
        }
    }
`
