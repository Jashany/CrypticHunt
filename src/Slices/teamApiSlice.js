import { apiSlice } from "./apiSlice";
const TEAMS_UR = import.meta.env.VITE_API;

export const teamApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createTeam: builder.mutation({
            query: ({teamName, userId}) => ({
                url: `${TEAMS_UR}/api/team/create`,
                method: "POST",
                body: { teamName, userId },
            }),
        }),
        joinTeam: builder.mutation({
            query: ({ teamId, userId }) => ({
                url: `${TEAMS_UR}/api/team/join`,
                method: "POST",
                body: { teamId, userId },
            }),
        }),
        fetchTeamDetails: builder.mutation({
            query: (userId) => ({
                url: `${TEAMS_UR}/api/team/getTeam`,
                method: "POST",
                body: userId,
            }),
        }),
        leaveTeam: builder.mutation({
            query: ({ teamId, userId }) => ({
                url: `${TEAMS_UR}/leave`,
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
