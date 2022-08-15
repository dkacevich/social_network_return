import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import {getUsers} from "../../../services/serverAPI";

const initialState = {
    users: [],
    loading: true,
    error: false,
    totalUsersCount: null,
    pageSize: 10,
    currentPage: 1
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (settings) => {
        return await getUsers(settings.currentPage, settings.pageSize)
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        changeCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload.items
                state.totalUsersCount = action.payload.totalCount
                state.loading = false
            })
            .addCase(fetchUsers.rejected, state => {
                state.error = true
                state.loading = false
            })
            .addDefaultCase(() => {
            })
    }
})

const {actions, reducer} = usersSlice

export default reducer
export const {
    changeCurrentPage
} = actions
