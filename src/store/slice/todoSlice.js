import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    add: (state, { payload }) => {
      state.push(payload);
    },
    delete: (state, { payload }) => {
      return state.filter((item) => {
        item.id !== payload.id;
      });
    },
    edit: (state, { payload }) => {
      return state.filter((item) => {
        item.id === payload.id;
      });
    },
  },
});

export const addReducers = todoSlice.reducer;
export default todoSlice.actions;
