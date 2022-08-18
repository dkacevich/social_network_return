import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_BASE = 'https://social-network.samuraijs.com/api/1.0'
const API_KEY = 'e254c744-2e53-4cc6-9d1f-15d4ac2623d3'


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE,
        prepareHeaders(headers) {
            headers.set('API-KEY', API_KEY)
            return headers;
        },
        credentials: "include"
    }),
    endpoints: builder => ({
        getUsers: builder.query({
            query: (count, limit = 10) => `/users?page=${count}&count=${limit}`,
        }),
        followUser: builder.mutation({
            query: (id) => ({
                url: `follow/${id}`,
                method: 'POST',
            }),
        }),
        unfollowUser: builder.mutation({
            query: (id) => ({
                url: `follow/${id}`,
                method: 'DELETE',
            }),
        })
    })
})


export const {useGetUsersQuery, useFollowUserMutation, useUnfollowUserMutation} = usersApi