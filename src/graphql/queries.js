/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBranch = /* GraphQL */ `
  query GetBranch($id: ID!) {
    getBranch(id: $id) {
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
export const listBranchs = /* GraphQL */ `
  query ListBranchs(
    $filter: ModelBranchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBranchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        branchName
        branchUsername
        adminId
        transactions {
          nextToken
        }
        branchProducts {
          nextToken
        }
        branchPaymentRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBranchProduct = /* GraphQL */ `
  query GetBranchProduct($id: ID!) {
    getBranchProduct(id: $id) {
      id
      branchId
      productId
      tags
      createdAt
      updatedAt
    }
  }
`;
export const listBranchProducts = /* GraphQL */ `
  query ListBranchProducts(
    $filter: ModelBranchProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBranchProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getPaymentRequest = /* GraphQL */ `
  query GetPaymentRequest($id: ID!) {
    getPaymentRequest(id: $id) {
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
export const listPaymentRequests = /* GraphQL */ `
  query ListPaymentRequests(
    $filter: ModelPaymentRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const branchByAdminId = /* GraphQL */ `
  query BranchByAdminId(
    $adminId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBranchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    branchByAdminId(
      adminId: $adminId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        branchName
        branchUsername
        adminId
        transactions {
          nextToken
        }
        branchProducts {
          nextToken
        }
        branchPaymentRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
