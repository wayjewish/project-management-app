import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import modalSingupReducer from './features/modalSingUp/modalSingupSlice'
import modalLoginReducer from './features/modalLogin/modalLoginSlice'
import BoardSlice from './features/boards/boardsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    modalSingup: modalSingupReducer,
    modalLogin: modalLoginReducer,
    boards: BoardSlice,
}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
