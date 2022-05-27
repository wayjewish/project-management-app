import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {api} from '../../api'


export interface IAuthState {
  token: string;
}

const initialState: IAuthState = {
  token: ''
};

export const getToken = createAsyncThunk(
  'user/getToken',
  async (_, { rejectWithValue, dispatch }) => {
const res = await axios.post(`https://desolate-crag-37445.herokuapp.com/signin`, {
  params: { 
     login: "admin",
    password: "admin" 
  },
})
console.log(res)
    // const res = await boardService.getAll();
    // dispatch(setBoards(res.data));
  }
);


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // getToken: (state, action: PayloadAction<string>) => {
    
    // },
  },
});

// export const { getToken } = userSlice.actions;

export default userSlice.reducer;
