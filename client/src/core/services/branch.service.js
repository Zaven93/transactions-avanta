import Amplify, { API, graphqlOperation } from 'aws-amplify'
import config from '../../aws-exports'
import { branchByAdminId } from '../../graphql/query'

Amplify.configure(config)

export const getBranchEntity = (key, { adminId }) =>
    API.graphql(
        graphqlOperation(branchByAdminId, {
            adminId: adminId
        })
    )
