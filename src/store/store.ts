import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import BoardSlice from './features/boards/boardsSlice';
import userSlice from './features/user/userSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice,
    boards: BoardSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
