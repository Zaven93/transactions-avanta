import React from "react"
import { useQuery } from "react-query"
import { BranchService } from "../services"

const useCheckBranchName = (branchName) => {
  const checkBranchName = useQuery(
    ["branchByName", { branchName }],
    BranchService.checkBranchName,
    { enabled: false }
  )

  return checkBranchName
}

export default useCheckBranchName
