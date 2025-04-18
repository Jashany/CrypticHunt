import { apiSlice } from "./apiSlice";
const USERS_URL = "https://cryptic-api.jsondev.in";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `https://cryptic-api.jsondev.in/api/users/auth`,
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `https://cryptic-api.jsondev.in/api/users/`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = userApiSlice;
