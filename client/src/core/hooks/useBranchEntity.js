import React from 'react'
import { useQuery } from 'react-query'
import { BranchService } from '../services'

const useBranchEntity = (adminId) => {
    const getBranch = useQuery(['get-branch', { adminId }], BranchService.getBranchEntity, {
        enabled: false
    })

    return getBranch
}

export default useBranchEntity
