import { createSlice } from '@reduxjs/toolkit';

export interface ModalLoginState {
  isOpenedLogin: boolean;
}

const initialState: ModalLoginState = {
  isOpenedLogin: false,
};

export const loginModalSlice = createSlice({
  name: 'ModalLoginToggle',
  initialState,
  reducers: {
    openModalLogin(state) {
      state.isOpenedLogin = true;
    },
    closeModalLogin(state) {
      state.isOpenedLogin = false;
    },
  },
});
export const { openModalLogin, closeModalLogin } = loginModalSlice.actions;
export default loginModalSlice.reducer;