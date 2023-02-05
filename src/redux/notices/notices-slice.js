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
  extraReducers: builder => {
    builder
      //getNoticesByCategory
      .addCase(getNoticesByCategory.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(getNoticesByCategory.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getNoticesByCategory.rejected, (state, { payload }) => {
        state.categories = [];
        state.isLoading = false;
        state.error = payload;
      })
      //getNoticeById
      .addCase(getNoticeById.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(getNoticeById.fulfilled, (state, { payload }) => {
        state.currentNotice = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getNoticeById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // addToFavorites
      .addCase(addToFavorites.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(addToFavorites.fulfilled, (state, { payload }) => {
        state.favorite = [payload.user.favorites, ...state.favorite];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addToFavorites.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      //getFavorites
      .addCase(getFavorites.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(getFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFavorites.rejected, (state, { payload }) => {
        state.favorite = [];
        state.isLoading = false;
        state.error = payload;
      })

      // removeFromFavorites
      .addCase(removeFromFavorites.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(removeFromFavorites.fulfilled, (state, { payload }) => {
        state.favorite = payload.user.favorite;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeFromFavorites.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // addNotice
      .addCase(addNotice.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(addNotice.fulfilled, (state, { payload }) => {
        state.categories = [payload, ...state.categories];
        state.userNotices = [payload, ...state.userNotices];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addNotice.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      //getMyNotice
      .addCase(getMyNotice.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(getMyNotice.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.userNotices = payload;
      })
      .addCase(getMyNotice.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })

      //deleteMyNotice
      .addCase(deleteMyNotice.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(deleteMyNotice.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.userNotices = store.userNotices.filter(
          ({ _id }) => _id !== payload.id
        );
      })
      .addCase(deleteMyNotice.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export const noticesReducer = noticesSlice.reducer;
