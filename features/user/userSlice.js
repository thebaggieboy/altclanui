import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

//action creators
export const { setUser } = userSlice.actions


//selectors
export const selectUser = mainState => mainState.user.user

export default userSlice.reducer