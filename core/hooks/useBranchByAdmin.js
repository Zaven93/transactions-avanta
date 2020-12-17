import React from "react"
import { useQuery, useMutation } from "react-query"
import { BranchService } from "../services"

const useBranchByAdmin = (adminId) => {
  const branchByAdmin = useQuery(["branch-by-admin", { adminId }], BranchService.getBranchByAdmin, {
    enabled: true,
  })

  return branchByAdmin
}

export default useBranchByAdmin
