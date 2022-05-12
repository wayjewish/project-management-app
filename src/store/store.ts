import { configureStore } from '@reduxjs/toolkit';
import BoardSlice from '../features/BoardSlice/BoardSlice'

export const store = configureStore({
  reducer: {
   boards:BoardSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
