import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBoard, IBoardData } from '../../../types';
import boardService from './boards.service';

const initialState: {
  boards: IBoard[];
  isOpenModalConfirm: boolean;
  loading: boolean;
} = {
  boards: [],
  isOpenModalConfirm: false,
  loading: false,
};

export const getBoards = createAsyncThunk(
  'boards/getBoards',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await boardService.getAll();
    console.log('board/getBoards', res);
    dispatch(setBoards(res.data));
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (board: IBoardData, { rejectWithValue, dispatch }) => {
    const add = await boardService.create(board);
    console.log('board/addBoard add', add);

    const res = await boardService.getAll();
    console.log('board/addBoard get', res);

    dispatch(setBoards(res.data));
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id: string, { rejectWithValue, dispatch }) => {
    const resDelete = await boardService.delete(id);
    console.log('board/addBoard delete', resDelete);

    const res = await boardService.getAll();
    console.log('board/addBoard get', res);

    dispatch(setBoards(res.data));
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
  },
  extraReducers: {
    [getBoards.pending.type]: (state) => {
      state.loading = false;
    },
    [getBoards.fulfilled.type]: (state) => {
      state.loading = true;
    },
    [getBoards.rejected.type]: () => {
      console.log('Не может занрузиться Boards');
    },
  },
});

export const { setBoards } = boardSlice.actions;

export default boardSlice.reducer;
