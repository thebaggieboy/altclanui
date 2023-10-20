import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user
        }
    }
})

//action creators
export const { setUser } = userSlice.actions


//selctors
export const selectUser = mainState => maintate.user.user

export default userSlice.reducer