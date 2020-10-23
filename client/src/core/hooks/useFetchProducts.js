import React from 'react'
import { useQuery } from 'react-query'
import { ProductsService } from '../services'

const useFetchProduct = () => {
    const getProducts = useQuery(['fetch-products'], ProductsService.fetchProducts)

    return getProducts
}

export default useFetchProduct
