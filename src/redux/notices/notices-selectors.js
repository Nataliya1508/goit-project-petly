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

export const getFiltredUserNotices = ({ notices, filter }) => {
  const userNotices = notices.userNotices;

  if(!filter) {
      return userNotices;
  }
  
  const normalizedFilter = filter.toLowerCase();
  const filteredUserNotices = userNotices.filter((item) => {
      const normalizedTitle = item.title.toLocaleLowerCase();
      const result = normalizedTitle.includes(normalizedFilter);
      return result;
  })

  return filteredUserNotices;
};

export const getFiltredFavoriteNotices = ({ notices, filter }) => {
  const favotiteNotices = notices.favorite;

  if(!filter) {
      return favotiteNotices;
  }

  const normalizedFilter = filter.toLowerCase();
  const filteredFavoritNotices = favotiteNotices.filter((item) => {
      const normalizedTitle = item.title.toLocaleLowerCase();
      const result = normalizedTitle.includes(normalizedFilter);
      return result;
  })

  return filteredFavoritNotices;
};
