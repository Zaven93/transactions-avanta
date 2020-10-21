/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      totalPrice
      totalBonusAmount
      note
      currency
      sortDate
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
      branchId
      createdAt
      updatedAt
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      totalPrice
      totalBonusAmount
      note
      currency
      sortDate
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
      branchId
      createdAt
      updatedAt
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      totalPrice
      totalBonusAmount
      note
      currency
      sortDate
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
      branchId
      createdAt
      updatedAt
    }
  }
`;
export const createBranch = /* GraphQL */ `
  mutation CreateBranch(
    $input: CreateBranchInput!
    $condition: ModelBranchConditionInput
  ) {
    createBranch(input: $input, condition: $condition) {
      id
      branchName
      branchUsername
      adminId
      transactions {
        items {
          id
          totalPrice
          totalBonusAmount
          note
          currency
          sortDate
          branchId
          createdAt
          updatedAt
        }
        nextToken
      }
      branchProducts {
        items {
          id
          branchId
          productId
          tags
          createdAt
          updatedAt
        }
        nextToken
      }
      branchPaymentRequests {
        items {
          id
          orderId
          customerId
          branchId
          bonusAmount
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBranch = /* GraphQL */ `
  mutation UpdateBranch(
    $input: UpdateBranchInput!
    $condition: ModelBranchConditionInput
  ) {
    updateBranch(input: $input, condition: $condition) {
      id
      branchName
      branchUsername
      adminId
      transactions {
        items {
          id
          totalPrice
          totalBonusAmount
          note
          currency
          sortDate
          branchId
          createdAt
          updatedAt
        }
        nextToken
      }
      branchProducts {
        items {
          id
          branchId
          productId
          tags
          createdAt
          updatedAt
        }
        nextToken
      }
      branchPaymentRequests {
        items {
          id
          orderId
          customerId
          branchId
          bonusAmount
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBranch = /* GraphQL */ `
  mutation DeleteBranch(
    $input: DeleteBranchInput!
    $condition: ModelBranchConditionInput
  ) {
    deleteBranch(input: $input, condition: $condition) {
      id
      branchName
      branchUsername
      adminId
      transactions {
        items {
          id
          totalPrice
          totalBonusAmount
          note
          currency
          sortDate
          branchId
          createdAt
          updatedAt
        }
        nextToken
      }
      branchProducts {
        items {
          id
          branchId
          productId
          tags
          createdAt
          updatedAt
        }
        nextToken
      }
      branchPaymentRequests {
        items {
          id
          orderId
          customerId
          branchId
          bonusAmount
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createBranchProduct = /* GraphQL */ `
  mutation CreateBranchProduct(
    $input: CreateBranchProductInput!
    $condition: ModelBranchProductConditionInput
  ) {
    createBranchProduct(input: $input, condition: $condition) {
      id
      branchId
      productId
      tags
      createdAt
      updatedAt
    }
  }
`;
export const updateBranchProduct = /* GraphQL */ `
  mutation UpdateBranchProduct(
    $input: UpdateBranchProductInput!
    $condition: ModelBranchProductConditionInput
  ) {
    updateBranchProduct(input: $input, condition: $condition) {
      id
      branchId
      productId
      tags
      createdAt
      updatedAt
    }
  }
`;
export const deleteBranchProduct = /* GraphQL */ `
  mutation DeleteBranchProduct(
    $input: DeleteBranchProductInput!
    $condition: ModelBranchProductConditionInput
  ) {
    deleteBranchProduct(input: $input, condition: $condition) {
      id
      branchId
      productId
      tags
      createdAt
      updatedAt
    }
  }
`;
export const createPaymentRequest = /* GraphQL */ `
  mutation CreatePaymentRequest(
    $input: CreatePaymentRequestInput!
    $condition: ModelPaymentRequestConditionInput
  ) {
    createPaymentRequest(input: $input, condition: $condition) {
      id
      orderId
      customerId
      branchId
      bonusAmount
      status
      products {
        originalUnitPrice
        variantId
        quantity
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePaymentRequest = /* GraphQL */ `
  mutation UpdatePaymentRequest(
    $input: UpdatePaymentRequestInput!
    $condition: ModelPaymentRequestConditionInput
  ) {
    updatePaymentRequest(input: $input, condition: $condition) {
      id
      orderId
      customerId
      branchId
      bonusAmount
      status
      products {
        originalUnitPrice
        variantId
        quantity
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePaymentRequest = /* GraphQL */ `
  mutation DeletePaymentRequest(
    $input: DeletePaymentRequestInput!
    $condition: ModelPaymentRequestConditionInput
  ) {
    deletePaymentRequest(input: $input, condition: $condition) {
      id
      orderId
      customerId
      branchId
      bonusAmount
      status
      products {
        originalUnitPrice
        variantId
        quantity
      }
      createdAt
      updatedAt
    }
  }
`;
