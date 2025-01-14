import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://django-dev.aakscience.com/"
    }),
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: ({ userData }) => ({
                url: '/signup/',
                method: 'POST',
                body: userData
            }),
            invalidatesTags: [{ type: 'User' }]
        })
    }),
})

export const { useRegisterUserMutation } = api;
