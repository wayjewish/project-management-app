import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import BoardsSlice from './features/boards/boardsSlice';
import boardSlice from './features/board/boardSlice';
import usersSlice from './features/users/usersSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    boards: BoardsSlice,
    board: boardSlice,
    users: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
