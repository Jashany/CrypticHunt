import { apiSlice } from "./apiSlice";

const quesURI = import.meta.env.VITE_API;

export const questionApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        checkAnswer: builder.mutation({
            query: ({ teamID, answer ,id }) => ({
                url: `${quesURI}/api/challenge/checkans/${id}`,
                method: "POST",
                body: { teamID, answer },
            }),
        }),
        getQuestion: builder.query({
            query: (id) => `${quesURI}/api/challenge/getques/${id}`,
        }),
    }),
});

export const { useCheckAnswerMutation ,useGetQuestionQuery } = questionApiSlice;
