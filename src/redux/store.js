import {configureStore} from "@reduxjs/toolkit";
import {baseApi} from "../components/api/apiSlice";


const reducer = {
    //One reducer and middleware for all RTK Query APIs
    [baseApi.reducerPath]: baseApi.reducer,
}


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store