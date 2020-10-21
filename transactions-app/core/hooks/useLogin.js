import React from "react"
import { useMutation } from "react-query"
import { AuthService } from "../services"

const useLogin = () => {
  const [login, { status, error, data }] = useMutation(AuthService.login)

  return {
    login,
    status,
    data,
    error,
  }
}

export default useLogin
