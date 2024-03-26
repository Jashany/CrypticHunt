import { apiSlice } from "./apiSlice";
const USERS_URL = import.meta.env.VITE_API;

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/api/users/auth`,
                method: "POST",
                body: data,
            }),
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/api/users/`,
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation,useSignupMutation } = userApiSlice;
