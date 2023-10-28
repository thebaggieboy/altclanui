import { createSlice } from "@reduxjs/toolkit";

const brandUserSlice = createSlice({
    name: "user",
    initialState: {
        user: [

        ]
    },
    reducers: {
        setBrandUser: (state, action) => {
            state.user = action.payload
        }
    }
})

//action creators
export const { setBrandUser } = brandUserSlice.actions


//selectors
export const selectBrandUser = mainState => mainState.user.user

export default brandUserSlice.reducer