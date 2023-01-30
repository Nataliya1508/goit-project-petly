import { createSlice } from '@reduxjs/toolkit';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: {},
});

export const newsReducer = newsSlice.reducer;
