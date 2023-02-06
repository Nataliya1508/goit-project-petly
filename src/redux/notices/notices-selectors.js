export const getNoticesError = ({ notices }) => notices.error;
export const getNoticesLoading = ({ notices }) => notices.isLoading;
export const getUserNotices = ({ notices }) => notices.userNotices;
export const getFavoriteNotices = ({ notices }) => notices.favorite;
export const selectNoticesByCategory = ({ notices }) => notices.categories;
export const selectCurrentNotice = ({ notices }) => notices.currentNotice;
