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
    // Action to clear the team information, e.g., when leaving a team or logging out
    clearTeamInfo: (state) => {
      state.teamInfo = null;
      localStorage.removeItem('teamInfo');
    },
  },
});

export const { setTeamInfo, clearTeamInfo } = teamSlice.actions;

export default teamSlice.reducer;
