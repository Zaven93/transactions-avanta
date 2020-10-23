import React from "react"
import { useMutation } from "react-query"
import { AuthService } from "../services"

const useConfirmSignUp = () => {
  const [confirmSignUp, { status, error, data }] = useMutation(AuthService.confirmSignUp)

  return {
    confirmSignUp,
    status,
    data,
    error,
  }
}

export default useConfirmSignUp
