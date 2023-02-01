import { createSlice } from '@reduxjs/toolkit';
import { register, login } from "./auth-operations";

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  token: null,
  user: {},
  isLoggedIn:false,
  loading: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(register.pending, (state, _) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(register.fulfilled, (state, {payload}) => {
            // state.user = payload;
            state.loading = false;
        })
        .addCase(register.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(login.pending, (state, _) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(login.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload.email;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(login.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        // .addCase(logout.pending, (state, _) => {
        //     state.loading = true;
        //     state.error = null;
        // })
        // .addCase(logout.fulfilled, (state, {payload}) => {
        //     state.loading = false;
        //     state.user = {};
        //     state.token = "";
        //     state.isLoggedIn = false;
        // })
        // .addCase(logout.rejected, (state, {payload}) => {
        //     state.loading = false;
        //     state.error = payload;
        // })
        // .addCase(getCurrentUser.pending, (state, _) => {
        //     state.isLoadingUser = true;
        //     state.error = null;
        // })
        // .addCase(getCurrentUser.fulfilled, (state, {payload}) => {
        //     state.isLoadingUser = false;
        //     state.user = payload;
        //     state.isLoggedIn = true;
        // })
        // .addCase(getCurrentUser.rejected, (state, {payload}) => {
        //     state.isLoadingUser = false;
        //     state.error = payload;
        // })        
    },
});

export const authReducer = authSlice.reducer;
