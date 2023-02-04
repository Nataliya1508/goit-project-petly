import { createSlice } from '@reduxjs/toolkit';

import {
  getNoticesByCategory,
  getNoticeById,
  addNotice,
  getMyNotice,
  getFavorites,
  addToFavorites,
  deleteMyNotice,
  removeFromFavorites,
} from './notices-operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

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
  extraReducers: {
    //getNoticesByCategory
    [getNoticesByCategory.pending]: handlePending,
    [getNoticesByCategory.fulfilled](state, { payload }) {
      console.log(payload);
      state.categories = payload;
      state.isLoading = false;
      state.error = null;
    },
    [getNoticesByCategory.rejected](state, { payload }) {
      state.categories = [];
      state.isLoading = false;
      state.error = payload;
    },

    // getNoticesByCategory
    [getNoticeById.pending]: handlePending,
    [getNoticeById.fulfilled](state, { payload }) {
      console.log(payload);
      state.isLoading = false;
      state.error = null;
    },
    [getNoticeById.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    // addToFavorites
    [addToFavorites.pending]: handlePending,
    [addToFavorites.fulfilled](state, { payload }) {
      console.log(payload);
      state.favorites = [payload.user.favorites, ...state.favorites];
      state.isLoading = false;
      state.error = null;
    },
    [addToFavorites.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    //getFavorites
    [getFavorites.pending]: handlePending,
    [getFavorites.fulfilled](state, { payload }) {
      console.log(payload);
      state.isLoading = false;
      state.error = null;
    },
    [getFavorites.rejected](state, { payload }) {
      state.favorites = [];
      state.isLoading = false;
      state.error = payload;
    },

    // removeFromFavorites
    [removeFromFavorites.pending]: handlePending,
    [removeFromFavorites.fulfilled](state, { payload }) {
      console.log(payload);
      state.favorites = payload.user.favorites;
      state.isLoading = false;
      state.error = null;
    },
    [removeFromFavorites.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    // addNotice
    [addNotice.pending]: handlePending,
    [addNotice.fulfilled](state, { payload }) {
      console.log(payload);
      state.categories = [payload, ...state.categories];
      state.userNotices = [payload, ...state.userNotices];
      state.isLoading = false;
      state.error = null;
    },
    [addNotice.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    //getMyNotice
    [getMyNotice.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getMyNotice.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.userNotices = payload;
    },
    [getMyNotice.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    //deleteMyNotice
    [deleteMyNotice.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [deleteMyNotice.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.userNotices = store.userNotices.filter(
        ({ _id }) => _id !== payload.id
      );
    },
    [deleteMyNotice.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const noticesReducer = noticesSlice.reducer;
