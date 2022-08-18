import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_BASE = 'https://social-network.samuraijs.com/api/1.0'
const API_KEY = 'e254c744-2e53-4cc6-9d1f-15d4ac2623d3'


export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE,
        prepareHeaders(headers) {
            headers.set('API-KEY', API_KEY)
            return headers;
        },
        credentials: "include"
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({})
})