import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import serverAPI from "../../../services/serverAPI";

const initialState = {
    posts: [
        {id: 0, text: 'Hey, why nobody loves me?!'},
        {id: 1, text: 'Hey, why nobody loves me?!'},
        {id: 2, text: 'Hey, why nobody loves me?!'},
    ],
    userProfile: null,
    status: null,
    loading: true,
    error: false
}

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    (id) => {
        return serverAPI.getProfileAPI(id)
    }
)

export const getStatus = createAsyncThunk(
    'profile/getStatus',
    (id) => {
        return serverAPI.getStatusAPI(id)
    }
)

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push({id: state.posts.length, text: action.payload})
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.loading = true
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false
                state.userProfile = action.payload
            })
            .addCase(getProfile.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(getStatus.fulfilled, (state, action) => {
                state.status = action.payload
            })
    }
})

const {actions, reducer} = profileSlice

export default reducer
export const {addPost} = actions
