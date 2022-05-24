import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBoardFull } from '../../../api/types';
import boardsService, { IPropsGetBoard } from '../../../api/boardsService';

const initialState: {
  board: IBoardFull | null;
  loading: boolean;
} = {
  board: null,
  loading: false,
};

export const getBoard = createAsyncThunk(
  'board/getBoard',
  async (props: IPropsGetBoard, { rejectWithValue, dispatch }) => {
    const res = await boardsService.get(props);
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
