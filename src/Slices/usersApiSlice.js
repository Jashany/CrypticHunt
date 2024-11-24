import { apiSlice } from "./apiSlice";
const USERS_URL = "https://cryptic-api.acmtiet.com";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `https://cryptic-api.acmtiet.com/api/users/auth`,
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `https://cryptic-api.acmtiet.com/api/users/`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = userApiSlice;
