import {createContext, useState, useReducer} from 'react'
import TokenReducer from './TokenReducer'
const initialState = {
    token:[ 
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5NDk1MDMwMywiaWF0IjoxNjk0ODYzOTAzLCJqdGkiOiJhMGQxZjhhMTA4MTk0ZmFjOTkyYzUxNTU5MGU1YTI2YyIsInVzZXJfaWQiOiI1ZDBjMmQ5NC1kZjg1LTQ2NGUtODI1NC1iZGQ1MTY3Yzc0YjMifQ.tD1aZPZPqfFBy0cIlQAm63fWNgo_6gji3zclbwUh0b4'
    ] 
}

// Create a context
export const TokenContext = createContext({initialState})

// Create a provider for the context
export function TokenContextProvider({children}){
    const [state, dispatch] = useReducer(TokenReducer, initialState);

    
    return(
        <TokenContext.Provider value={{
            token:state.token,
       
        }}>
            {children}
        </TokenContext.Provider>
    )
}