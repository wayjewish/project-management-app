import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import BoardSlice from './features/boards/boardsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    boards: BoardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
