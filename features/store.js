import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import userSlice from "./user/userSlice"
import brandSlice from "./brands/brandSlice"
import brandUserSlice from "./brands/brandUserSlice";
import { createWrapper } from "next-redux-wrapper";


const makeStore = () =>
    configureStore({
        reducer: {
            user: userSlice,
            brand_user:brandUserSlice,
            brands:brandSlice

        },
        middleware: (getDefaultMiddleWare) => (
            getDefaultMiddleWare().concat(logger)
        ),
        devTools: process.env.NODE_ENV !== "production"
    })



export const wrapper = createWrapper(makeStore)