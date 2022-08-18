import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import serverAPI from "../../services/serverAPI";

const initialState = {
    authData: null,
    authorized: false,
    loading: true
}

export const getAuthStatus = createAsyncThunk(
    'auth/getAuthStatus',
    () => serverAPI.getAuthStatusAPI()
)

export const login = createAsyncThunk(
    'auth/getAuthStatus',
    () => serverAPI.getAuthStatusAPI()
)


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers:  {
        [getAuthStatus.fulfilled]: (state, action) => {
            if (action.payload.resultCode === 0) {
                state.authorized = true
                state.authData = action.payload.data
                state.loading = false
            } else {
                state.authorized = false
                state.loading = false
            }
        }
    }

})

const { reducer } = authSlice

export default reducer