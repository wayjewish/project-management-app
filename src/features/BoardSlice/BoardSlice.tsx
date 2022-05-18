import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IBoard {
  id: string;
  title: string;
  description: string;
}

const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OWQzMTczMy03NTE0LTQ0MzQtYTNjZC0xZjUxMTIyOTMyZWMiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjUyNzM1NjA1fQ.FPhPjvKQg_Cnz6yK9e-bvsYCmUwkTWJSst4zfGV8AGo',
  'Content-Type': 'application/json;charset=utf-8',
};

const initialState: {
  boards: {
    id: string;
    title: string;
    description: string;
  }[];
  isOpenModalConfirm: boolean;
} = {
  boards: [],
  isOpenModalConfirm: false,
};
export const getBoards: AsyncThunk<void, void, {}> = createAsyncThunk(
  'board/getBoards',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get<IBoard[]>('https://morning-lowlands-47809.herokuapp.com/boards', {
      headers: headers,
    });
    dispatch(setBoards(res.data));
  }
);

export const BoardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    deleteBoard: (state, action) => {
      state.boards = action.payload;
    },
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
  },
  extraReducers: {
    [getBoards.fulfilled.type]: () => {
      console.log('1');
    },
    [getBoards.pending.type]: () => {
      console.log('2');
    },
    [getBoards.rejected.type]: () => {
      console.log('3');
    },
  },
});

export const { deleteBoard, setBoards } = BoardSlice.actions;

export default BoardSlice.reducer;
