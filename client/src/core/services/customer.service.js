import axios from 'axios'

const BASE_URL = 'https://rrw0uo137l.execute-api.us-east-1.amazonaws.com/dev'

export const getCustomer = (key, { customerId }) =>
    axios({
        method: 'GET',
        url: `${BASE_URL}/api/customer/${customerId}`
    })
