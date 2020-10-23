import axios from 'axios'

const BASE_URL = 'https://rrw0uo137l.execute-api.us-east-1.amazonaws.com/dev'

export const createOrder = ({ data }) =>
    axios({
        method: 'POST',
        url: `${BASE_URL}/api/order`,
        data
    })
