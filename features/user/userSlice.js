import { createSlice } from "@reduxjs/toolkit";

export const USER_TYPES = {
    brand: "BRAND",
    shopper: "SHOPPER"
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        type: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setUserType: (state, action) => {
            state.type = action.payload
        }
    }
})

//action creators
export const { setUser, setUserType } = userSlice.actions


//selectors
export const selectUser = mainState => mainState.user.user
export const selectUserType = mainState => mainState.user.type

export default userSlice.reducer