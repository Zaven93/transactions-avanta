import gql from "graphql-tag"

export const listTransactions = gql`
  query listTransactions($limit: Int, $nextToken: String) {
    listTransactions(limit: $limit, nextToken: $nextToken) {
      nextToken
      items {
        id
        totalPrice
        totalBonusAmount
        note
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
        createdAt
      }
    }
  }
`

export const listProducts = gql`
  query Products {
    products(first: 100) {
      edges {
        node {
          id
          title
          tags
          description(truncateAt: 100)
          variants(first: 1) {
            edges {
              node {
                id
                price
              }
            }
          }
          images(first: 1) {
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
`

export const branchByAdminId = gql`
  query branchByAdminId($adminId: ID!) {
    branchByAdminId(adminId: $adminId) {
      items {
        adminId
        branchName
        id
        transactions {
          items {
            branchId
            createdAt
            currency
            id
            note
            customer {
              email
              firstName
              id
              lastName
              phone
            }
            products {
              bonusPercentage
              id
              image
              priceAmount
              priceCurrency
              title
            }
            sortDate
            totalBonusAmount
            totalPrice
            updatedAt
          }
        }
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
export const listPaymentRequest = gql`
  query listPaymentRequest($branchId: ID, $status: PaymentStatus, $limit: Int, $nextToken: String) {
    listPaymentRequests(
      limit: $limit
      nextToken: $nextToken
      filter: { branchId: { eq: $branchId }, status: { eq: $status } }
    ) {
      items {
        bonusAmount
        createdAt
        customerId
        id
        orderId
        status
        updatedAt
      }
      nextToken
    }
  }
`
export const getBranchById = gql`
  query getBranch($id: ID!) {
    getBranch(id: $id) {
      transactions(sortDirection: DESC) {
        items {
          branchId
          createdAt
          currency
          note
          customer {
            email
            id
            firstName
            lastName
            phone
          }
          totalBonusAmount
          totalPrice
          updatedAt
          sortDate
        }
      }
      branchName
      adminId
      id
      branchProducts {
        items {
          branchId
          createdAt
          id
          productId
          tags
          updatedAt
        }
      }
    }
  }
`

export const listBranchs = gql`
  query listBranchs {
    listBranchs {
      items {
        adminId
        branchName
        branchUsername
        createdAt
        id
        branchProducts {
          items {
            branchId
            createdAt
            id
            productId
            tags
            updatedAt
          }
        }
        branchPaymentRequests {
          items {
            branchId
            id
          }
        }
        transactions {
          items {
            branchId
            id
          }
        }
      }
    }
  }
`
