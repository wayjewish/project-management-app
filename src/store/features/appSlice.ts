import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface IErrorApp {
  id: string;
  type: string;
  message: string;
}

export interface IAuthState {
  errors: IErrorApp[];
}

const initialState: IAuthState = {
  errors: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addError: (state, action) => {
      const error = {
        ...action.payload,
        id: uuidv4(),
      };

      state.errors.push(error);
    },
    removeError: (state, action) => {
      const deletedError = action.payload;
      const newErrors = [...state.errors];
      const index = newErrors.map((error) => error.id).indexOf(deletedError.id);

      newErrors.splice(index, 1);
      state.errors = newErrors;
    },
  },
});

export const { addError, removeError } = appSlice.actions;

export default appSlice.reducer;
