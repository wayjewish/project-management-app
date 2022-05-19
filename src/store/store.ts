import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
// import LoginModalSlice from './features/modalLogin/modalSlice';
import modalSingupReducer from './features/modalSingUp/modalSingupSlice'
import modalLoginReducer from './features/modalLogin/modalLoginSlice'

export const store = configureStore({
  reducer: {
    isAuth: authSlice,
    modaSingup: modalSingupReducer,
    modalLogin: modalLoginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
