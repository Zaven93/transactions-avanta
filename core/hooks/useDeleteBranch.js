import React from "react"
import { useMutation } from "react-query"
import { BranchService } from "../services"

const useDeleteBranch = () => {
  const [deleteBranch, { isLoading, error, data }] = useMutation(BranchService.deleteBranch)

  return {
    deleteBranch,
    isLoading,
    error,
    data,
  }
}

export default useDeleteBranch
