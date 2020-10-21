import React from "react"
import { useQuery } from "react-query"
import { BranchService } from "../services"
import config from "../../aws-exports"

const useBranchEntity = (branchId) => {
  const branchInfo = useQuery(["branch-entity", { branchId }], BranchService.getBranch, {
    enabled: false,
  })

  return branchInfo
}

export default useBranchEntity
