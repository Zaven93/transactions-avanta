import { shopifyRequest } from "../../utils/shopifyRequest"
import { getCustomer } from "../../graphql/queries"

export const getCustomerById = (key, { customerId }) =>
  shopifyRequest(getCustomer, { id: customerId })
