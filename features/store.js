import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import userSlice from "./user/userSlice"
import { createWrapper } from "next-redux-wrapper";


const makeStore = () =>
    configureStore({
        reducer: {
            user: userSlice
        },
        middleware: (getDefaultMiddleWare) => (
            getDefaultMiddleWare().concat(logger)
        ),
        devTools: process.env.NODE_ENV !== "production"
    })



export const wrapper = createWrapper(makeStore)