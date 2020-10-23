import { API, graphqlOperation } from "aws-amplify"
import { v4 as uuidv4 } from "uuid"
import { getBranchById, listBranchs, branchByAdminId } from "../../graphql/queries"
import { createBranch } from "../../graphql/mutation"
import config from "../../aws-exports"

API.configure(config)

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

export const listBranchEntities = (key) => API.graphql(graphqlOperation(listBranchs))
