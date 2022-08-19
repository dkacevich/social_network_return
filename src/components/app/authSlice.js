import {baseApi} from "../api/apiSlice";

export const authApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getAuthStatus: builder.query({
            query: () => `/auth/me`
        }),
    })
})

export const {
    useGetAuthStatusQuery: getAuthStatus
} = authApi