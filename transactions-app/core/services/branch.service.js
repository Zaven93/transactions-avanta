import { API, graphqlOperation } from "aws-amplify"
import { getBranchById } from "../../graphql/queries"
import config from "../../aws-exports"

API.configure(config)

export const getBranch = (key, { branchId }) =>
  API.graphql(graphqlOperation(getBranchById, { id: branchId }))
