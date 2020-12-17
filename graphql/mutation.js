import gql from "graphql-tag"

export const createDraftOrder = /* GraphQL */ `
  mutation CreateDraftOrder($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
      draftOrder {
        id
      }
    }
  }
`

export const markDraftOrderComplete = /* GraphQL */ `
  mutation CompleteOrder($id: ID!) {
    draftOrderComplete(id: $id, paymentPending: true) {
      draftOrder {
        id
        order {
          id
        }
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
      amount
      customerId
      branchId
      bonusAmount
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

export const updateUser = /* GraphQL */ `
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      bonusAmount
    }
  }
`
