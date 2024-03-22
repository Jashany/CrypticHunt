import { apiSlice } from "./apiSlice";
const TEAMS_URL = "/api/team";

export const teamApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createTeam: builder.mutation({
            query: ({teamName, userId}) => ({
                url: `${TEAMS_URL}/create`,
                method: "POST",
                body: { teamName, userId },
            }),
        }),
        joinTeam: builder.mutation({
            query: ({ teamId, userId }) => ({
                url: `${TEAMS_URL}/join`,
                method: "POST",
                body: { teamId, userId },
            }),
        }),
        fetchTeamDetails: builder.mutation({
            query: (userId) => ({
                url: `${TEAMS_URL}/getTeam`,
                method: "POST",
                body: userId,
            }),
        }),
        leaveTeam: builder.mutation({
            query: ({ teamId, userId }) => ({
                url: `${TEAMS_URL}/leave`,
                method: "POST",
                body: { teamId, userId },
            }),
        }),
    }),
});

// Export hooks for mutations and queries
export const {
    useCreateTeamMutation,
    useJoinTeamMutation,
    useFetchTeamDetailsMutation,
    useLeaveTeamMutation,
} = teamApiSlice;
