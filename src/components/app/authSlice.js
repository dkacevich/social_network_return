import {baseApi} from "../api/apiSlice";

export const authApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getAuthStatus: builder.query({
            query: () => `/auth/me`,
            providesTags: ['Auth']
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST'
            }),
            invalidatesTags: ['Auth']
        }),
        // login: builder.mutation({
        //     query: () => ({
        //         url: '/auth/logout',
        //         method: 'POST'
        //     }),
        //     invalidatesTags: ['Auth']
        // })
    })
})

export const {
    useGetAuthStatusQuery: getAuthStatus,
    useLogoutMutation: useLogout,
    useLoginMutation: useLogin,
} = authApi