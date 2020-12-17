import React from "react"
import { useMutation } from "react-query"
import { OrderService } from "../services"

const useCreateOrder = () => {
  const [createOrder, { isLoading, error, data }] = useMutation(OrderService.createOrder)

  return {
    createOrder,
    isLoading,
    error,
    data,
  }
}

export default useCreateOrder
