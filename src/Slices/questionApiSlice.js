import { apiSlice } from "./apiSlice";

const quesURI = "https://cryptic-api.jsondev.in";

export const questionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkAnswer: builder.mutation({
      query: ({ teamID, answer, id }) => ({
        url: `${quesURI}/api/challenge/checkans/${id}`,
        method: "POST",
        body: { teamID, answer },
      }),
    }),
    getQuestion: builder.query({
      query: (id) =>
        `https://cryptic-api.jsondev.in/api/challenge/getques/${id}`,
    }),
  }),
});

export const { useCheckAnswerMutation, useGetQuestionQuery } = questionApiSlice;
