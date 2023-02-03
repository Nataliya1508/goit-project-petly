import { createSlice } from '@reduxjs/toolkit';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  categories: [],
  isLoading: false,
  userNotices: [],
  favorite: [],
  error: null,
  isAddedSuccess: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {},
});

export const noticesReducer = noticesSlice.reducer;
