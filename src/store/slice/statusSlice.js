import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
  name: 'status',
  initialState: '',
  reducers: {
    setStatus: (state, action) => action.payload,
  },
});

export const statusReducers = statusSlice.reducer;
export const { setStatus } = statusSlice.actions;
