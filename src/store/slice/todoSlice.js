import { createSlice } from '@reduxjs/toolkit';

function setTodo(state) {
  localStorage.setItem('todo', JSON.stringify(state));
}

function getTodo() {
  const rawItems = localStorage.getItem('todo');
  return rawItems ? JSON.parse(rawItems) : [];
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: getTodo(),
  reducers: {
    add: (state, { payload }) => {
      state.push(payload);
      setTodo(state);
    },
    delete: (state, { payload }) => {
      const newState = state.filter((item) => item.id !== payload);
      setTodo(newState);
      return newState;
    },
    edit: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...payload.updatedData };
      }

      setTodo(state);
    },
    completeAll: (state) => {
      const newState = state.map((item) => ({
        ...item,
        isComplete: true,
      }));
      setTodo(newState);
      return newState;
    },
  },
});

export const todoReducers = todoSlice.reducer;
export default todoSlice.actions;
