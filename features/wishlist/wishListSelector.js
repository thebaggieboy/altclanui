import generateUniqueId from "../../utils/uuid";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    wishlist: [

    ],
    iswishListActive: false
}

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { itemId, qty, size, color } = action.payload
            const wishlistId = generateUniqueId(itemId, color, size)
            //gets all occurences of that item in the wishlist
            const occurences = state.wishlist.filter((wishlistItem) => wishlistItem.itemId === itemId)
            if (occurences.length !== 0) {
                //finds the occurence with the same size as the incoming item
                const sameSize = occurences.find((oc) => oc.size === size)
                if (sameSize && sameSize.color.toLowerCase() === color.toLowerCase()) {
                    //updates the qty of the already existing item with same size and same color
                    sameSize.qty += qty
                    return
                }
                //same size but diff color(diff item), push to wishlist
            }
            //if no occurences generate a unique id, then push to wishlist

            state.wishlist.push({ id: wishlistId, ...action.payload })
        },
        removeItem: (state, action) => {
            const { id } = action.payload

            state.wishlist = state.wishlist.filter((item) => {
                return item.id !== id
            })


        },
        clearwishlist: (state, action) => {
            state.wishlist = []
        },
        updateItemQuantity: (state, action) => {
            const { id, value } = action.payload
            const existingItem = state.wishlist.find((wishlistItem) => wishlistItem.id === id)
            if (existingItem) {
                existingItem.qty = value
            }
        },
        setwishlistActive: (state, action) => {
            state.iswishListActive = action.payload
        }
    }
})

export const { addItem, setCartActive, removeItem, updateItemQuantity, clearCart } = wishListSlice.actions

export default wishListSlice.reducer