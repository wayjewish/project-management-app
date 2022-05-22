import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBoardFull } from '../../../types';
import boardService from '../../../api/boardsService';

const initialState: {
  board: IBoardFull | null;
  loading: boolean;
} = {
  board: null,
  loading: false,
};

export const getBoard = createAsyncThunk(
  'board/getBoard',
  async (id: string, { rejectWithValue, dispatch }) => {
    const res = await boardService.get(id);
    console.log(res);
    dispatch(setBoard(res.data));
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
  },
  extraReducers: {
    [getBoard.pending.type]: (state) => {
      state.loading = true;
    },
    [getBoard.fulfilled.type]: (state) => {
      state.loading = false;
    },
  },
});

export const { setBoard } = boardSlice.actions;

export default boardSlice.reducer;
