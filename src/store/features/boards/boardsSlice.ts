import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBoard, IBoardData } from '../../../types';
import boardsService from '../../../api/boardsService';

const initialState: {
  boards: IBoard[] | null;
  loading: boolean;
} = {
  boards: null,
  loading: false,
};

export const getBoards = createAsyncThunk(
  'boards/getBoards',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await boardsService.getAll();
    dispatch(setBoards(res.data));
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (board: IBoardData, { rejectWithValue, dispatch }) => {
    await boardsService.create(board);

    const res = await boardsService.getAll();
    dispatch(setBoards(res.data));
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id: string, { rejectWithValue, dispatch }) => {
    await boardsService.delete(id);

    const res = await boardsService.getAll();
    dispatch(setBoards(res.data));
  }
);

export const boardsSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
  },
  extraReducers: {
    [getBoards.pending.type]: (state) => {
      state.loading = true;
    },
    [getBoards.fulfilled.type]: (state) => {
      state.loading = false;
    },
  },
});

export const { setBoards } = boardsSlice.actions;

export default boardsSlice.reducer;
