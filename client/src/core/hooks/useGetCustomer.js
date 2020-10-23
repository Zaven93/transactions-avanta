import React from 'react'
import { useQuery } from 'react-query'
import { CustomerService } from '../services'

const useGetCustomer = (customerId) => {
    const getCustomer = useQuery(['get-customer', { customerId }], CustomerService.getCustomer, {
        enabled: false
    })

    return getCustomer
}

export default useGetCustomer
