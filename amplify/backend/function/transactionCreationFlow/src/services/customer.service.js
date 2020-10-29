module.exports.customerById = /* GraphQL */ `
    query Customer($id: ID!) {
        customer(id: $id) {
            firstName
            lastName
            email
            id
            image(size: 100) {
                originalSrc
            }
        }
    }
`
