import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "../components/pages/profile/profileSlice";
import authReducer from "../components/app/authSlice";
import {usersApi} from "../components/pages/users/usersApi";


const reducer = {
    profile: profileReducer,
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer,
}


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store