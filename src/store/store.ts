import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import BoardsSlice from './features/boardsSlice';
import boardSlice from './features/boardSlice';
import columnsSlice from './features/columnsSlice';
import tasksSlice from './features/tasksSlice';
import usersSlice from './features/usersSlice';
import BoardSlice from './features/boards/boardsSlice';
import userSlice from './features/user/userSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice,
    boards: BoardsSlice,
    board: boardSlice,
    columns: columnsSlice,
    tasks: tasksSlice,
    users: usersSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
