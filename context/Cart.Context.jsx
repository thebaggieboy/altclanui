import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {

  const existingItem = cartItems.find((item) => {
    return item.id === productToAdd.id
  })

  if (existingItem) {
   return cartItems.map((item) => { 
    return item.id === existingItem.id ? 
     { ...item, quantity: item.quantity + 1 }
     : item
    })
  }


  const newItem = {
    ...productToAdd,
    quantity: 1
  }
  return [...cartItems, newItem]

}

const updateItemQuantity = (cartItems, id, action) => {
  const itemToUpdate = cartItems.find((item) => {
    return item.id === id
  })
  
  if (itemToUpdate) {
    return cartItems.map((item) => {
      return item.id === id ? {
          ...item,
          quantity: action === 'add' ? item.quantity + 1 :
          action === 'minus' && item.quantity > 1 ? 
          item.quantity - 1 
          : 1
        
        } :
        item
        
    })
  }
}

const deleteCartItem = (cartItems, id) =>{
   return cartItems.filter((item)=>{
    return item.id !== id
   })
}

export const CartContext = createContext({
  isActive: false,
  setIsActive: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  setItemQuantity: () => {},
  removeCartItem: () => {},
  totalAmount: 0
})

const CART_ACTION_TYPES = {
  setIsActive: 'SET_CART_ACTIVE',
  updateCartItems: 'UPDATE_CART_ITEMS'
}

const cartReducer = (state, action) =>{
  const { type, payload } = action

  const { isActive} = state

  switch(type){
    case CART_ACTION_TYPES.setIsActive:
    return {
      ...state,
      isActive: !isActive
    }
     case CART_ACTION_TYPES.updateCartItems:
       return {
         ...state,
        ...payload
        }
        default:
          throw new Error('Unhandled type recieved')
  }
}


const DEFAULT_STATE_VALUES = {
  isActive:false,
  cartItems: [],
  totalAmount:0,
  cartCount:0
}

export const CartStateProvider = ({children}) =>{
 
 const [ state, dispatch ] = useReducer(cartReducer, DEFAULT_STATE_VALUES )

  const { isActive, cartItems, cartCount, totalAmount } = state

  const setIsActive = () =>{
    dispatch(createAction(CART_ACTION_TYPES.setIsActive))
  }

  
  const updateCartItems = (newCartItems) =>{
    const newCartCount = newCartItems.reduce((total, item)=> total + item.quantity ,0)
    
    const newTotalAmount = newCartItems.reduce((total, item)=> total + (item.quantity * item.price) ,0)

    dispatch(
      createAction(CART_ACTION_TYPES.updateCartItems,{
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalAmount: newTotalAmount
      })
    )
  }
  
  const addItemToCart = (productToAdd) =>{
   const newCartItems = addCartItem(cartItems,productToAdd)
   updateCartItems(newCartItems)
  
  }

  const setItemQuantity = (id, action) =>{
   const newCartItems = updateItemQuantity(cartItems, id, action)
   updateCartItems(newCartItems)
  }
  
   
  const removeCartItem = (id) =>{
    const newCartItems = deleteCartItem(cartItems, id)
    updateCartItems(newCartItems)
  }

  const value = {
    isActive,
    setIsActive,
    cartItems,
    addItemToCart,
    cartCount,
    setItemQuantity,
    removeCartItem,
    totalAmount 
  }
  

return <CartContext.Provider value={value}>
       {children}
    </CartContext.Provider>
}