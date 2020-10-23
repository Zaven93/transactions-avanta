import React from "react"
import { useMutation } from "react-query"
import { BranchService } from "../services"

const useCreateBranch = () => {
  const [createBranch, { isLoading, error, data }] = useMutation(BranchService.createBranchEntity)

  return {
    createBranch,
    isLoading,
    error,
    data,
  }
}

export default useCreateBranch
