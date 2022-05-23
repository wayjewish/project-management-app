import { createSlice } from '@reduxjs/toolkit';

export interface userState {
  name: string;
  login: string;
  password: string;
  isError: boolean;
  isSuccess: boolean;
}
const initialState: userState = {
  name: '',
  login: '',
  password: '',
  isError: false,
  isSuccess: false,
};
export const userSlice = createSlice({
  name: 'UserData',
  initialState,
  reducers: {},
});
export default userSlice.reducer;
