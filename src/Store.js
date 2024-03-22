import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authslice';
import teamReducer from './Slices/teamSlice';
import  {apiSlice}  from './Slices/apiSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        team: teamReducer,
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default store;