import React from "react"
import { useQuery } from "react-query"
import { PaymentService } from "../services"

const useFetchPaymentRequest = (branchId, status, limit) => {
  const paymentRequests = useQuery(
    ["payment-request", { branchId, status, limit }],
    PaymentService.fetchPaymentRequest,
    { enabled: false }
  )
  return paymentRequests
}

export default useFetchPaymentRequest
