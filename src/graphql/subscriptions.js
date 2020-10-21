/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
export const onCreateBranch = /* GraphQL */ `
  subscription OnCreateBranch {
    onCreateBranch {
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
export const onUpdateBranch = /* GraphQL */ `
  subscription OnUpdateBranch {
    onUpdateBranch {
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
export const onDeleteBranch = /* GraphQL */ `
  subscription OnDeleteBranch {
    onDeleteBranch {
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
export const onCreateBranchProduct = /* GraphQL */ `
  subscription OnCreateBranchProduct {
    onCreateBranchProduct {
      id
      branchId
      productId
      tags
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBranchProduct = /* GraphQL */ `
  subscription OnUpdateBranchProduct {
    onUpdateBranchProduct {
      id
      branchId
      productId
      tags
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBranchProduct = /* GraphQL */ `
  subscription OnDeleteBranchProduct {
    onDeleteBranchProduct {
      id
      branchId
      productId
      tags
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePaymentRequest = /* GraphQL */ `
  subscription OnCreatePaymentRequest {
    onCreatePaymentRequest {
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
export const onUpdatePaymentRequest = /* GraphQL */ `
  subscription OnUpdatePaymentRequest {
    onUpdatePaymentRequest {
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
export const onDeletePaymentRequest = /* GraphQL */ `
  subscription OnDeletePaymentRequest {
    onDeletePaymentRequest {
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
