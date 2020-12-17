import { API, graphqlOperation } from "aws-amplify"
import config from "../../aws-exports"
import { listPaymentRequest } from "../../graphql/queries"
import { updatePaymentRequest } from "../../graphql/mutation"

API.configure(config)

export const fetchPaymentRequest = (key, { branchId, status, limit, nextToken }) =>
  API.graphql(graphqlOperation(listPaymentRequest, { branchId, status, limit, nextToken }))

export const updatePayment = ({ paymentId, bonusAmount, amount, status, orderId }) => {
  return API.graphql(
    graphqlOperation(updatePaymentRequest, {
      input: {
        id: paymentId,
        bonusAmount,
        amount,
        status,
        orderId,
      },
    })
  )
}
