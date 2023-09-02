export default (state, action) => {
    switch(action.type) {
      case 'REMOVE_ITEM_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(cart => transaction.cart !== action.payload)
        }
        case 'ADD_TO_CART':
          const existingItemIndex = state.cart.findIndex(
            (item) => item.id === action.payload.id
          );
    
          if (existingItemIndex !== -1) {
            const updatedCartItems = [...state.cart];
            updatedCartItems[existingItemIndex].quantity += 1;
    
            return {
              ...state,
              cart: updatedCartItems,
            };
          } else {
            return {
              ...state,
              cart: [...state.cart, { ...action.payload, quantity: 1 }],
            };
          }
      case 'ADD_ITEM_TO_CART':
        return {
          ...state,
          cart: [action.payload, ...state.cart]
        }
      default:
        return state;
    }
  }