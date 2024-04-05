import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  solvedQuestions: localStorage.getItem('solvedQuestions') ? JSON.parse(localStorage.getItem('solvedQuestions')) : [],
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    solveQuestion: (state, action) => {
      const solvedQuestionId = action.payload;
      state.solvedQuestions.push(solvedQuestionId);
      localStorage.setItem('solvedQuestions', JSON.stringify(state.solvedQuestions));
    },
    clearSolvedQuestions: (state) => {
      state.solvedQuestions = [];
      localStorage.removeItem('solvedQuestions');
    },
  },
});

export const { solveQuestion, clearSolvedQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
