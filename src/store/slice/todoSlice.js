import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {},
});

export const todoReducers = todoSlice.reducer;
export default todoSlice.actions;
