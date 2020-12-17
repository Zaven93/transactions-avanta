import React from "react"
import { useQuery } from "react-query"
import { CustomerService } from "../services"

const useGetShopifyCustomer = (customerId) => {
  const getCustomer = useQuery(
    ["customer-by-id", { customerId }],
    CustomerService.getCustomerById,
    {
      enabled: false,
    }
  )

  return getCustomer
}

export default useGetShopifyCustomer
