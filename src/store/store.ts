import { configureStore } from '@reduxjs/toolkit';
import BoardSlice  from '../features/BoardSlice/BoardSlice';
import authSlice from './features/auth/authSlice';


export const store = configureStore({
  reducer: {
   boards:BoardSlice
   isAuth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
