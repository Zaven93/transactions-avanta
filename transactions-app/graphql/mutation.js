import gql from "graphql-tag"

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
export const createBranch = gql`
  mutation createBranch($input: CreateBranchInput!) {
    createBranch(input: $input) {
      id
      adminId
      branchName
    }
  }
`

export const removeBranch = gql`
  mutation deleteBranch($input: DeleteBranchInput!) {
    deleteBranch(input: $input) {
      id
    }
  }
`

export const deleteTransaction = gql`
  mutation deleteTransaction($input: DeleteTransactionInput!) {
    deleteTransaction(input: $input) {
      id
    }
  }
`

export const deleteBranchProduct = gql`
  mutation deleteBranchProduct($input: DeleteBranchProductInput!) {
    deleteBranchProduct(input: $input) {
      id
    }
  }
`

export const deletePaymentRequest = gql`
  mutation deletePaymentRequest($input: DeletePaymentRequestInput!) {
    deletePaymentRequest(input: $input) {
      id
    }
  }
`

export const createBranchProduct = gql`
  mutation createBranchProduct($input: CreateBranchProductInput!) {
    createBranchProduct(input: $input) {
      id
      branchId
      productId
      tags
    }
  }
`

export const productUpdate = gql`
  mutation productUpdate($input: ProductInput!) {
    productUpdate(input: $input) {
      product {
        id
        metafields(first: 100) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
    }
  }
`

export const updateBranchProduct = gql`
  mutation updateBranchProduct($input: UpdateBranchProductInput!) {
    updateBranchProduct(input: $input) {
      id
      tags
      branchId
      productId
    }
  }
`
