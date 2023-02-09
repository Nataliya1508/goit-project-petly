import { createSelector } from '@reduxjs/toolkit';

export const getNoticesError = ({ notices }) => notices.error;
export const getNoticesLoading = ({ notices }) => notices.isLoading;
export const selectTotalCountNotices = ({ notices }) => notices.total;
export const selectCurrentNotice = ({ notices }) => notices.currentNotice;

export const getUserNotices = ({ notices }) => notices.userNotices;
export const getFavoriteNotices = ({ notices }) => notices.favorite;
export const selectNoticesByCategory = ({ notices }) => notices.categories;

// const selectSomething = createSelector(
//   state => state.something,
//   state => state.something2,
//   (something, something2) => ({ something, something2 })
// );

export const getAllNotices = createSelector(
  [
    ({ notices }) => notices.userNotices,
    ({ notices }) => notices.favorite,
    ({ notices }) => notices.categories,
    ({ notices }) => notices.total,
  ],
  (ownNotices, favoriteNotices, categories, totalNotices) => ({
    ownNotices,
    favoriteNotices,
    categories,
    totalNotices,
  })
);
