import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contacts/contactApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import filterReducer from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
