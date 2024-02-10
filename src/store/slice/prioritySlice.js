import { createSlice } from '@reduxjs/toolkit';

const prioritySlice = createSlice({
  name: 'priority',
  initialState: '',
  reducers: {
    setPriority: (state, { payload }) => {
      return payload;
    },
  },
});

export const priorityReducers = prioritySlice.reducer;
export const { setPriority } = prioritySlice.actions;
