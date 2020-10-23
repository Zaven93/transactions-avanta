import { useMutation } from 'react-query'
import { OrderService } from '../services'

const useSendOrder = () => {
    const [sendOrder, { isLoading, error, data }] = useMutation(OrderService.createOrder)

    return {
        sendOrder,
        isLoading,
        error,
        data
    }
}

export default useSendOrder
