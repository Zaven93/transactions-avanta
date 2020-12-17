import React from "react"
import { useQuery } from "react-query"
import { BranchService } from "../services"
import config from "../../aws-exports"

const useBranchEntity = () => {
  const branchInfo = useQuery(["list-branches"], BranchService.listBranchEntities, {
    enabled: true,
  })

  return branchInfo
}

export default useBranchEntity
