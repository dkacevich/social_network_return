import {baseApi} from "../api/apiSlice";

export const authApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getAuthStatus: builder.query({
            query: () => `/auth/me`,
            providesTags: ['Auth']
        }),
        getCaptchaUrl: builder.query({
            query: () => `/security/get-captcha-url`,
            providesTags: ['Captcha']
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST'
            }),
            invalidatesTags: ['Auth']
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Auth', 'Captcha']
        })
    })
})

export const {
    useGetAuthStatusQuery: getAuthStatus,
    useLogoutMutation: useLogout,
    useLoginMutation: useLogin,
    useLazyGetCaptchaUrlQuery: useGetCaptchaUrl
} = authApi