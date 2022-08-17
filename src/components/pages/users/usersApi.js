import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_BASE = 'https://social-network.samuraijs.com/api/1.0'


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE}),
    endpoints: builder => ({
        getUsers: builder.query({
            query: (count, limit = 10) => `/users?page=${count}&count=${limit}`
        })
    })
})


export const {useGetUsersQuery} = usersApi