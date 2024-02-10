import { configureStore } from '@reduxjs/toolkit';
import { todoReducers } from './slice/todoSlice';
import { priorityReducers } from './slice/prioritySlice';
import { statusReducers } from './slice/statusSlice';

const store = configureStore({
  reducer: {
    todo: todoReducers,
    priority: priorityReducers,
    status: statusReducers,
  },
});

export default store;
