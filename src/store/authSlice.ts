import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const signupApi = createApi({
    reducerPath: 'signupApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://django-dev.aakscience.com/" }),
    endpoints: (builder) => ({
        reisterUser: builder.mutation({
            query: (userData) => ({
                url: "/signup/",
                method: "POST",
                body: userData
            })
        })
    }),
})

export const { useRegisterUserMutation } = signupApi;