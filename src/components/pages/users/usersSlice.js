import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import serverAPI from "../../../services/serverAPI";

const initialState = {
   followingInProgress: []
}



const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addToProgress: (state, action) => {
            state.followingInProgress.push(action.payload)
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchUsers.pending, state => {
    //             state.loading = true
    //         })
    //         .addCase(fetchUsers.fulfilled, (state, action) => {
    //             state.users = action.payload.items
    //             state.totalUsersCount = action.payload.totalCount
    //             state.loading = false
    //         })
    //         .addCase(fetchUsers.rejected, state => {
    //             state.error = true
    //             state.loading = false
    //         })
    //         .addDefaultCase(() => {
    //         })
    // }
})

const {actions: usersActions, reducer} = usersSlice

export default reducer
export { usersActions }