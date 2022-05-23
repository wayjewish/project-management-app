import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import modalSingupReducer from './features/modalSingUp/modalSingupSlice'
import modalLoginReducer from './features/modalLogin/modalLoginSlice'
import { userSlice } from './features/modalSingUp/userSlice';

export const store = configureStore({
  reducer: {
    isAuth: authSlice,
    modalSingup: modalSingupReducer,
    modalLogin: modalLoginReducer,
    user: userSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
