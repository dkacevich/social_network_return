import {baseApi} from "../../api/apiSlice";

export const usersApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: ({count, filter, limit}) => {
                return {
                    url: `/users?page=${count}&count=${limit}${filter}`
                }
            //    `/users?page=${count}&count=${limit}${filter}`
            },
        }),
        changeFollowUser: builder.mutation({
            query: ({id, method}) => ({
                url: `follow/${id}`,
                method: method,
            }),

            async onQueryStarted({id, method, data}, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    usersApi.util.updateQueryData('getUsers', data, draft => {
                        const user = draft.items.find(user => user.id === id)
                        method === 'POST' ? user.followed = true : user.followed = false
                        user.loading = true
                    })
                )
                try {
                    await queryFulfilled
                    dispatch(
                        usersApi.util.updateQueryData('getUsers', data, draft => {
                            const user = draft.items.find(user => user.id === id)
                            user.loading = false
                        })
                    )
                } catch {
                    patchResult.undo()
                }
            },
        }),
    })
})


export const {useGetUsersQuery, useChangeFollowUserMutation} = usersApi