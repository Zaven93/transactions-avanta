import React from "react"
import { useMutation } from "react-query"
import { PaymentService } from "../services"

const useUpdatePaymentRequest = () => {
  const [updatePaymentRequest, { isLoading, error, data }] = useMutation(
    PaymentService.updatePayment
  )

  return {
    updatePaymentRequest,
    isLoading,
    error,
    data,
  }
}

export default useUpdatePaymentRequest
