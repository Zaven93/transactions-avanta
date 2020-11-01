import AWS from 'aws-sdk'
import { API, graphqlOperation } from 'aws-amplify'
import { v4 as uuidv4 } from 'uuid'
import { getBranchById, listBranchs, branchByAdminId } from '../../graphql/queries'
import {
    createBranch,
    removeBranch,
    deleteTransaction,
    deleteBranchProduct,
    deletePaymentRequest
} from '../../graphql/mutation'
import config from '../../aws-exports'

API.configure(config)

AWS.config.update({
    accessKeyId: 'AKIAIF6WKVKSOTQCUREQ',
    secretAccessKey: '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',
    region: 'us-east-1'
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
                id: uuidv4()
            }
        })
    )

export const listBranchEntities = (key) => API.graphql(graphqlOperation(listBranchs))

export const deleteBranch = async ({ branches, username, id }) => {
    const branchToDelete = branches.listBranchs.items.filter((item) => item.id === id)[0]

    const transactionsToDelete = branchToDelete.transactions.items
        ? branchToDelete.transactions.items.map((transaction) => transaction.id)
        : ''

    const productsToDelete = branchToDelete.branchProducts.items
        ? branchToDelete.branchProducts.items.map((product) => product.id)
        : ''

    const paymentRequestToDelete = branchToDelete.branchPaymentRequests.items
        ? branchToDelete.branchPaymentRequests.items.map((paymentRequest) => paymentRequest.id)
        : ''

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
                UserPoolId: 'us-east-1_IfrnnzGFR',
                Username: username
            })
            .promise()
    } catch (error) {
        console.log(error)
    }
}
