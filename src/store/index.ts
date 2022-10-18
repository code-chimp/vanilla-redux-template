import { configureStore } from '@reduxjs/toolkit';
import IAlert from '../@interfaces/IAlert';
import alerts from './slices/alerts';
import counter, { ICounterSlice } from './slices/counter';
import user, { IUserSlice } from './slices/user';

export interface IStore {
  alerts: Array<IAlert>;
  counter: ICounterSlice;
  user: IUserSlice;
}

const store = configureStore({
  reducer: { alerts, counter, user },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

export default store;
