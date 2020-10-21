import React, { createContext, useReducer } from 'react'
import { reducer, initialState } from './reducer'

export const Context = createContext()

export const Store = (props) => {
    const [avantaState, dispatch] = useReducer(reducer, initialState)
    return <Context.Provider value={{ avantaState, dispatch }}>{props.children}</Context.Provider>
}
