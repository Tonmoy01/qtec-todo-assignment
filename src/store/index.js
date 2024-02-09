import { configureStore } from '@reduxjs/toolkit';
import { addReducers } from './slice/todoSlice';

const store = configureStore({
  reducer: {
    todo: addReducers,
  },
});

export default store;
