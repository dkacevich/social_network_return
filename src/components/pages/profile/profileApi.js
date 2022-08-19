import {baseApi} from "../../api/apiSlice";

export const profileApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getProfile: builder.query({
            query: ({id}) => `/profile/${id}`
        }),
        getStatus: builder.query({
            query: ({id}) => `/profile/status/${id}`
        }),
    })
})

export const {
    useGetProfileQuery: useGetProfile,
    useGetStatusQuery: useGetStatus
} = profileApi