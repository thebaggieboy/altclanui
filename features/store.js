import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import userSlice from "./user/userSlice"


const store = configureStore({
    reducer: {
        user: userSlice
    },
    middleware: (getDefaultMiddleWare) => (
        getDefaultMiddleWare().concat(logger)
    ),
    devTools: process.env.NODE_ENV !== "production"
})


export default store