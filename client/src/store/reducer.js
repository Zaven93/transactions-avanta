import {
    GET_PRODUCTS,
    SET_CHOSEN_PRODUCTS,
    SET_CUSTOMER_ID,
    CREATE_ORDER,
    GET_CUSTOMER
} from './actionTypes'

export const initialState = {
    products: null,
    chosenProducts: [],
    customerId: null,
    customer: null,
    order: null
}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action
    if (type === GET_PRODUCTS) {
        return {
            ...state,
            products: payload
        }
    }
    if (type === SET_CHOSEN_PRODUCTS) {
        return {
            ...state,
            chosenProducts: payload
        }
    }
    if (type === SET_CUSTOMER_ID) {
        return {
            ...state,
            customerId: payload
        }
    }
    if (type === GET_CUSTOMER) {
        return {
            ...state,
            customer: payload
        }
    }
    if (type === CREATE_ORDER) {
        return {
            ...state,
            order: payload
        }
    }
    return state
}
