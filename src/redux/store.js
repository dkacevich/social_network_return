import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "../components/pages/profile/profileSlice";
import usersReducer from "../components/pages/users/usersSlice";

const reducer = {
    profile: profileReducer,
    users: usersReducer
}


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store