import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import clubReducer from '../features/clubs/clubSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    clubs: clubReducer,
  },
});
