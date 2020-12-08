import AWS from "aws-sdk"
import { API, graphqlOperation } from "aws-amplify"
import { v4 as uuidv4 } from "uuid"
import { getBranchById, listBranchs, branchByAdminId, getBranchByName } from "../../graphql/queries"
import {
  createBranch,
  removeBranch,
  deleteTransaction,
  deleteBranchProduct,
  deletePaymentRequest,
} from "../../graphql/mutation"
import config from "../../aws-exports"

AWS.config.update({
  accessKeyId: "AKIA5VX4IMFOFHT7M2O2",
  secretAccessKey: "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",
  region: "us-east-1",
})

const cognito = new AWS.CognitoIdentityServiceProvider()

export const getBranch = (key, { branchId }) =>
  API.graphql(graphqlOperation(getBranchById, { id: branchId }))

export const getBranchByAdmin = (key, { adminId }) =>
  API.graphql(graphqlOperation(branchByAdminId, { adminId }))

export const createBranchEntity = ({ userSub, username, branchName }) =>
  API.graphql(
    graphqlOperation(createBranch, {
      input: {
        adminId: userSub,
        branchUsername: username,
        branchName: branchName,
        id: uuidv4(),
      },
    })
  )

export const checkBranchName = (key, { branchName }) =>
  API.graphql(
    graphqlOperation(getBranchByName, {
      branchName,
    })
  )

export const listBranchEntities = (key) => API.graphql(graphqlOperation(listBranchs))

export const deleteBranch = async ({ branches, username, id }) => {
  console.log("Branch data that should be deleted", branches)
  const branchToDelete = branches.listBranchs.items.filter((item) => item.id === id)[0]

  console.log("Branch to delete Zaven", branchToDelete)

  const transactionsToDelete = branchToDelete.transactions.items
    ? branchToDelete.transactions.items.map((transaction) => transaction.id)
    : ""

  const productsToDelete = branchToDelete.branchProducts.items
    ? branchToDelete.branchProducts.items.map((product) => product.id)
    : ""

  const paymentRequestToDelete = branchToDelete.branchPaymentRequests.items
    ? branchToDelete.branchPaymentRequests.items.map((paymentRequest) => paymentRequest.id)
    : ""

  console.log("Transactions to Delete", transactionsToDelete)
  console.log("Products to delete", productsToDelete)
  console.log("PaymentRequests to delete", paymentRequestToDelete)
  console.log("Username to delete", username)
  try {
    const deletedBranch = await API.graphql(graphqlOperation(removeBranch, { input: { id } }))

    await Promise.all(
      transactionsToDelete.map((transactionId) => {
        API.graphql(graphqlOperation(deleteTransaction, { input: { id: transactionId } }))
      })
    ).catch((err) => console.log(err))

    await Promise.all(
      productsToDelete.map((productId) => {
        API.graphql(graphqlOperation(deleteBranchProduct, { input: { id: productId } }))
      })
    ).catch((err) => console.log(err))

    await Promise.all(
      paymentRequestToDelete.map((paymentId) => {
        API.graphql(graphqlOperation(deletePaymentRequest, { input: { id: paymentId } }))
      })
    )

    await cognito
      .adminDeleteUser({
        UserPoolId: "us-east-1_xuc7kseKp",
        Username: username,
      })
      .promise()
  } catch (error) {
    console.log(error)
  }
}
