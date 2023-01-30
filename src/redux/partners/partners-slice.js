import { createSlice } from '@reduxjs/toolkit';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  extraReducers: {},
});

export const partnersReducer = partnersSlice.reducer;
