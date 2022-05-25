import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBoard } from '../../api/types';
import boardsService, { IPropsGetBoard } from '../../api/boardsService';

const initialState: {
  board: IBoard | null;
  isLoading: boolean;
  error: {
    error: string;
    message: string;
  } | null;
} = {
  board: null,
  isLoading: false,
  error: null,
};

export const getBoard = createAsyncThunk(
  'board/getBoard',
  async (props: IPropsGetBoard, { rejectWithValue, dispatch }) => {
    const res = await boardsService.get(props);
    const data = res.data;
    console.log(data);

    if (data.error) {
      dispatch(setErrorBoard({ error: data.error.error, message: data.error.message }));
    } else {
      dispatch(setBoard(data));
    }
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    setErrorBoard: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [getBoard.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBoard.fulfilled.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setBoard, setErrorBoard } = boardSlice.actions;

export default boardSlice.reducer;
