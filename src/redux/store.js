import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { newsReducer } from './news/news-slice';
import { noticesReducer } from './notices/notices-slice';
import { partnersReducer } from './partners/partners-slice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// Persisting token field from auth slice to localstorage
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    news: newsReducer,
    notices: noticesReducer,
    partners: partnersReducer,
    auth: authReducer,
  },
  //   middleware,
});
