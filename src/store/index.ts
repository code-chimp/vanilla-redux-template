import { configureStore } from '@reduxjs/toolkit';
import user, { IUserSlice } from './slices/user';
import counter, { ICounterSlice } from './slices/counter';

export interface IStore {
  counter: ICounterSlice;
  user: IUserSlice;
}

const store = configureStore({
  reducer: { counter, user },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

export default store;
