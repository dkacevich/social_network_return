import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "../components/pages/profile/profileSlice";
import usersReducer from "../components/pages/users/usersSlice";
import authReducer from "../components/app/authSlice";


const reducer = {
    profile: profileReducer,
    users: usersReducer,
    auth: authReducer
}


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store