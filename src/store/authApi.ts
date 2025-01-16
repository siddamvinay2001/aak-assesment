import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface UserData {
    first_name: string,
    last_name: string,
    user_type: string,
    username: string,
    createPassword: string,
    confirmPassword: string,
    password: string,
    email: string,
    country: string,
}

interface RegisterResponse {
    status: string;
    message: string;
}

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://django-dev.aakscience.com/",
    }),
    tagTypes: ["User"],
    endpoints: (build) => ({
        registerUser: build.mutation<RegisterResponse, { userData: UserData }>({
            query: ({ userData }) => ({
                url: "/signup/",
                method: "POST",
                body: userData,
            }),
            invalidatesTags: [{ type: "User" }],
        }),
    }),
});

export const { useRegisterUserMutation } = api;
