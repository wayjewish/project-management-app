import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  isAuth: boolean;
}

const initialState: IAuthState = {
  isAuth: localStorage.getItem('isAuth') === 'true' ? true : false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
      localStorage.setItem('isAuth', String(action.payload));
    },
  },
});

export const { change } = authSlice.actions;

export default authSlice.reducer;
