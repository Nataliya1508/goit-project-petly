import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getCurrentUser } from "./auth-operations";

const handlePending = state => {
  state.isRefreshing = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const initialState = {
  token: null,
  user: {},
  isLoggedIn:false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(register.pending, (state, _) => {
            handlePending(state);           
        })
        .addCase(register.fulfilled, (state, _) => {
            state.isRefreshing = false;
        })
        .addCase(register.rejected, (state, action) => {
            handleRejected(state, action);
        })
        .addCase(login.pending, (state, _) => {
            handlePending(state);
        })
        .addCase(login.fulfilled, (state, { payload }) => {
            state.isRefreshing = false;
            state.user = payload.email;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(login.rejected, (state, action) => {
            handleRejected(state, action);
        })
        .addCase(logout.pending, (state, _) => {
            handlePending(state);
        })
        .addCase(logout.fulfilled, (state, {payload}) => {
            state.isRefreshing = false;
            state.user = {};
            state.token = "";
            state.isLoggedIn = false;
        })
        .addCase(logout.rejected, (state, action) => {
            handleRejected(state, action);
        })
        .addCase(getCurrentUser.pending, (state, _) => {
            handlePending(state);
        })
        .addCase(getCurrentUser.fulfilled, (state, {payload}) => {
            state.isRefreshing = false;
            state.user = payload;
            state.isLoggedIn = true;
        })
        .addCase(getCurrentUser.rejected, (state, action) => {
            handleRejected(state, action);
        })        
    },
});

export const authReducer = authSlice.reducer;
