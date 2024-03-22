import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teamInfo: localStorage.getItem('teamInfo') ? JSON.parse(localStorage.getItem('teamInfo')) : null,
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    // Action to set the team information and members
    setTeamInfo: (state, action) => {
      state.teamInfo = action.payload;
      localStorage.setItem('teamInfo', JSON.stringify(action.payload));
    },
    removeTeamMember: (state, action) => {
      state.members = state.members.filter(member => member._id !== action.payload);
      // Update localStorage after removing a member
      const updatedTeamInfo = { ...state.teamInfo, members: state.members };
      localStorage.setItem('teamInfo', JSON.stringify(updatedTeamInfo));
    },
    // Action to clear the team information, e.g., when leaving a team or logging out
    clearTeamInfo: (state) => {
      state.teamInfo = null;
      localStorage.removeItem('teamInfo');
    },
  },
});

export const { setTeamInfo, addTeamMember, removeTeamMember, clearTeamInfo } = teamSlice.actions;

export default teamSlice.reducer;
