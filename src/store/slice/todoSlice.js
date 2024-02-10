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
      const index = state.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...payload.updatedData };
      }
    },
  },
});

export const addReducers = todoSlice.reducer;
export default todoSlice.actions;
