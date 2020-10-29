import React from "react"
import { useMutation } from "react-query"
import { AuthService } from "../services"

const useSignUp = () => {
  const [signUserUp, { status, error, data }] = useMutation(AuthService.signUp)

  return {
    signUserUp,
    status,
    data,
    error,
  }
}

export default useSignUp
