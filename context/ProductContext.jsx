import {createContext, useState} from 'react'
import ProductReducer from "@/context/ProductReducer"
const initialState = {
    products:[

    ]
}

export const ProductContext = createContext({initialState})

export function ProductsContextProvider({children}){
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    // Actions
    function deleteProducts(id) {
      dispatch({
        type: 'DELETE_NEW_PRODUCTS',
        payload: id
      });
    }
  
    function newProducts(products) {
      dispatch({
        type: 'ADD_NEW_PRODUCTS',
        payload: products
      });
    }

    
    return(
        <ProductContext.Provider value={{products:state.products, deleteProducts, newProducts}}>
            {children}
        </ProductContext.Provider>
    )
}