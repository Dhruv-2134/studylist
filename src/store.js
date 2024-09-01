// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './slices/coursesSlices';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    // Add other reducers here if you have any
  },
});