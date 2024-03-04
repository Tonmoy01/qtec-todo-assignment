import { configureStore } from '@reduxjs/toolkit';
import { todoReducers } from './slice/todoSlice';
import { priorityReducers } from './slice/prioritySlice';
import { statusReducers } from './slice/statusSlice';
import searchReducer from './slice/searchSlice';

const store = configureStore({
  reducer: {
    todo: todoReducers,
    priority: priorityReducers,
    status: statusReducers,
    search: searchReducer,
  },
});

export default store;
