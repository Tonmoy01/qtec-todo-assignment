import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    add: (state, { payload }) => {
      state.push(payload);
    },
    delete: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
    edit: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...payload.updatedData };
      }
    },
    completeAll: (state) => {
      return state?.map((item) => ({ ...item, isComplete: true }));
    },
  },
});

export const todoReducers = todoSlice.reducer;
export default todoSlice.actions;
