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
  total: 0,
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
      .addCase(getNoticesByCategory.pending, (state, _) => {
        handlePending(state);
      })
      .addCase(getNoticesByCategory.fulfilled, (state, { payload }) => {
        state.total = payload.total;
        state.categories = payload.result;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getNoticesByCategory.rejected, (state, { payload }) => {
        state.categories = [];
        state.isLoading = false;
        state.error = payload;
      })
      //getNoticeById
      // .addCase(getNoticeById.pending, (state, _) => {
      //   handlePending(state);
      // })
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
      // .addCase(addToFavorites.pending, (state, _) => {
      //   handlePending(state);
      // })
      .addCase(addToFavorites.fulfilled, (state, { payload }) => {
        state.favorite = [payload.notice, ...state.favorite];
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
        state.favorite = [...payload.favorites];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFavorites.rejected, (state, { payload }) => {
        state.favorite = [];
        state.isLoading = false;
        state.error = payload;
      })
      // removeFromFav
      .addCase(removeFromFavorites.fulfilled, (state, { payload }) => {
        const index = state.favorite.findIndex(
          item => item._id === payload.notice._id
        );
        state.favorite.splice(index, 1);

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
      .addCase(getMyNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userNotices = payload;
      })
      .addCase(getMyNotice.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      //deleteMyNotice
      // .addCase(deleteMyNotice.pending, (state, _) => {
      //   handlePending(state);
      // })
      .addCase(deleteMyNotice.fulfilled, (state, { payload }) => {
        const ownIndex = state.userNotices.findIndex(
          item => item._id === payload.id
        );
        const categoryIndex = state.categories.findIndex(
          item => item._id === payload.id
        );
        state.userNotices.splice(ownIndex, 1);
        state.categories.splice(categoryIndex, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteMyNotice.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const noticesReducer = noticesSlice.reducer;
