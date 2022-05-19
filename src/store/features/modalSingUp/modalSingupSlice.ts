import { createSlice } from '@reduxjs/toolkit';

export interface ModalSingupState {
  isOpenedSingup: boolean;
}

const initialState: ModalSingupState = {
    isOpenedSingup: false,
};

export const singupModalSlice = createSlice({
  name: 'ModalLoginToggle',
  initialState,
  reducers: {
    openModalSingup(state) {
      state.isOpenedSingup = true;
    },
    closeModalSingup(state) {
      state.isOpenedSingup = false;
    },
  },
});
export const { openModalSingup, closeModalSingup } = singupModalSlice.actions;
export default singupModalSlice.reducer;
