import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authslice';
import teamReducer from './Slices/teamSlice';
import  {apiSlice}  from './Slices/apiSlice';
import questionReducer from './Slices/questionSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        team: teamReducer,
        question: questionReducer,
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;