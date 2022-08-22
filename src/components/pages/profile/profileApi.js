import {baseApi} from "../../api/apiSlice";

export const profileApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getProfile: builder.query({
            query: ({id}) => `/profile/${id}`,
            providesTags: ['Profile']
        }),
        getStatus: builder.query({
            query: ({id}) => `/profile/status/${id}`,
            providesTags: ['Status']
        }),
        fetchProfile: builder.mutation({
            query: (data) => {
                debugger
                return {
                    url: `/profile`,
                    method: 'PUT',
                    body: data
                }
            },
            invalidatesTags: ['Profile']

        }),
        fetchProfilePhoto: builder.mutation({
            query: (data) => ({
                url: `/profile/photo`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Profile']
        }),
        fetchProfileStatus: builder.mutation({
            query: (data) => ({
                url: `/profile/status`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Status']
        }),
    })
})

export const {
    useGetProfileQuery: useGetProfile,
    useGetStatusQuery: useGetStatus,
    useFetchProfileMutation: useFetchProfile,
    useFetchProfilePhotoMutation: useFetchProfilePhoto,
    useFetchProfileStatusMutation: useFetchProfileStatus,
} = profileApi