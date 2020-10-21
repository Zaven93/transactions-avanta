import gql from 'graphql-tag'

export const branchByAdminId = gql`
    query branchByAdminId($adminId: ID!) {
        branchByAdminId(adminId: $adminId) {
            items {
                adminId
                branchName
                id
                branchProducts {
                    items {
                        branchId
                        createdAt
                        id
                        productId
                        tags
                    }
                }
            }
        }
    }
`
