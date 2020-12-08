import gql from "graphql-tag"

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

export const onCreateTransaction = gql`
  subscription onCreateTransaction {
    onCreateTransaction {
      id
    }
  }
`

export const onDeleteTransaction = gql`
  subscription onDeleteTransaction {
    onDeleteTransaction {
      id
    }
  }
`

export const onCreateBranchSubscription = gql`
  subscription onCreateBranch {
    onCreateBranch {
      id
    }
  }
`

export const onUpdateBranchSubscription = gql`
  subscription onUpdateBranch {
    id
  }
`

export const onDeleteBranchSubscription = gql`
  subscription onDeleteBranch {
    onDeleteBranch {
      id
    }
  }
`
export const onCreateBranchProduct = gql`
  subscription onCreateBranchProduct {
    onCreateBranchProduct {
      id
    }
  }
`
export const onUpdateBranchProduct = gql`
  subscription onUpdateBranchProduct {
    onUpdateBranchProduct {
      id
    }
  }
`

export const onDeleteBranchProduct = gql`
  subscription onDeleteBranchProduct {
    onDeleteBranchProduct {
      id
    }
  }
`
