import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import userSlice from "./user/userSlice"
import brandSlice from "./brands/brandSlice"
import brandUserSlice from "./brands/brandUserSlice";
import shopSlice from "./shop/shopSlice";

import orderSlice from "./orders//ordersSlice";


import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["shop", "brands", "user",]
}

const rootReducer = combineReducers({
    user: userSlice,
    brand_user: brandUserSlice,
    brands: brandSlice,
    shop: shopSlice,
    orders:orderSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleWare) => (
        getDefaultMiddleWare({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger)
    ),
    devTools: process.env.NODE_ENV !== "production"
})

export const peristor = persistStore(store)


export default store