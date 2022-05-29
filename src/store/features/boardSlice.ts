import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBoard, IErrorApi } from '../../api/types';
import boardsService, { IPropsGetBoard } from '../../api/boardsService';

const initialState: {
  board: IBoard | null;
  isLoading: boolean;
  errorsBoard: {
    get: IErrorApi | null;
  };
} = {
  board: null,
  isLoading: false,
  errorsBoard: {
    get: null,
  },
};

const sortBoardData = (board: IBoard) => {
  board.columns = board.columns.sort((a, b) => a.order - b.order);
  board.columns.map((column) => column.tasks.sort((a, b) => a.order - b.order));
  return board;
};

export const getBoard = createAsyncThunk(
  'board/getBoard',
  async (props: IPropsGetBoard, { rejectWithValue, dispatch }) => {
    const res = await boardsService.get(props);
    const data = res.data;

    if (res.catch) {
      dispatch(
        setErrorsBoard({
          get: {
            code: res.data.statusCode,
            message: res.data.message,
          },
        })
      );
    } else {
      const board = sortBoardData(data);
      dispatch(setBoard(board));
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
    setErrorsBoard: (state, action) => {
      state.errorsBoard = {
        ...state.errorsBoard,
        ...action.payload,
      };
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

export const { setBoard, setErrorsBoard } = boardSlice.actions;

export default boardSlice.reducer;
