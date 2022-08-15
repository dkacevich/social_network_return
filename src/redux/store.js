import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "../components/pages/profile/profileSlice";

const reducer = {
    profile: profileReducer
}


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store