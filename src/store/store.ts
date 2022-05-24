import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import BoardsSlice from './features/boards/boardsSlice';
import boardSlice from './features/board/boardSlice';
import columnsSlice from './features/columns/columnsSlice';
import tasksSlice from './features/tasks/tasksSlice';
import usersSlice from './features/users/usersSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    boards: BoardsSlice,
    board: boardSlice,
    columns: columnsSlice,
    tasks: tasksSlice,
    users: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
