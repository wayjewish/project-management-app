import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBoardFull, IColumnData } from '../../../types';
import boardsService from '../../../api/boardsService';
import columnsService from '../../../api/columnsService';
import tasksService from '../../../api/tasksService';

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
    const res = await boardsService.get(id);
    dispatch(setBoard(res.data));
  }
);

interface IPropsAddColumn {
  boardId: string;
  data: IColumnData;
}

export const addColumn = createAsyncThunk(
  'board/addColumn',
  async (props: IPropsAddColumn, { rejectWithValue, dispatch }) => {
    const { boardId, data } = props;
    await columnsService.create(boardId, data);

    const res = await boardsService.get(boardId);
    dispatch(setBoard(res.data));
  }
);

interface IPropsAddTask {
  boardId: string;
  columnId: string;
  data: IColumnData;
}

export const addTask = createAsyncThunk(
  'board/addTask',
  async (props: IPropsAddTask, { rejectWithValue, dispatch }) => {
    const { boardId, columnId, data } = props;
    await tasksService.create(boardId, columnId, data);

    const res = await boardsService.get(boardId);
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
