import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBoardFull, IColumnData, IColumn, ITask } from '../../../api/types';
import boardsService from '../../../api/boardsService';
import columnsService from '../../../api/columnsService';
import tasksService from '../../../api/tasksService';

const initialState: {
  board: IBoardFull | null;
  loading: boolean;
  isOpenModalColumn: {
    formAdd: boolean;
    confirmDelete: boolean;
  };
  deletedColumn: IColumn | null;
  activeColumn: IColumn | null;
  isOpenModalTask: {
    formAdd: boolean;
    formEdit: boolean;
    confirmDelete: boolean;
  };
  deletedTask: ITask | null;
  activeTask: ITask | null;
} = {
  board: null,
  loading: false,
  isOpenModalColumn: {
    formAdd: false,
    confirmDelete: false,
  },
  deletedColumn: null,
  activeColumn: null,
  isOpenModalTask: {
    formAdd: false,
    formEdit: false,
    confirmDelete: false,
  },
  deletedTask: null,
  activeTask: null,
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

    dispatch(getBoard(boardId));
  }
);

interface IPropsDeleteColumn {
  boardId: string;
  columnId: string;
}

export const deleteColumn = createAsyncThunk(
  'boards/deleteColumn',
  async (props: IPropsDeleteColumn, { rejectWithValue, dispatch }) => {
    const { boardId, columnId } = props;
    await columnsService.delete(boardId, columnId);

    dispatch(getBoard(boardId));
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

    dispatch(getBoard(boardId));
  }
);

interface IPropsUpdateTask {
  boardId: string;
  columnId: string;
  taskId: string;
  data: IColumnData;
}

export const updateTask = createAsyncThunk(
  'board/updateTask',
  async (props: IPropsUpdateTask, { rejectWithValue, dispatch }) => {
    const { boardId, columnId, taskId, data } = props;
    await tasksService.update(boardId, columnId, taskId, data);

    dispatch(getBoard(boardId));
  }
);

interface IPropsDeleteTask {
  boardId: string;
  columnId: string;
  taskId: string;
}

export const deleteTask = createAsyncThunk(
  'board/deleteTask',
  async (props: IPropsDeleteTask, { rejectWithValue, dispatch }) => {
    const { boardId, columnId, taskId } = props;
    console.log(props);
    await tasksService.delete(boardId, columnId, taskId);

    dispatch(getBoard(boardId));
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    changeIsOpenModalColumn: (state, action) => {
      console.log('changeIsOpenModalColumn');
      state.isOpenModalColumn = {
        ...state.isOpenModalColumn,
        ...action.payload,
      };
      console.log(state.isOpenModalColumn);
    },
    setDeletedColumn: (state, action) => {
      console.log('setDeletedColumn');
      state.deletedColumn = action.payload;
      console.log(state.deletedColumn);
    },
    setActiveColumn: (state, action) => {
      console.log('setDeletedColumn');
      state.activeColumn = action.payload;
      console.log(state.activeColumn);
    },
    changeIsOpenModalTask: (state, action) => {
      console.log('changeIsOpenModalTask');
      state.isOpenModalTask = {
        ...state.isOpenModalColumn,
        ...action.payload,
      };
      console.log(state.isOpenModalTask);
    },
    setDeletedTask: (state, action) => {
      console.log('setDeletedTask');
      state.deletedTask = action.payload;
      console.log(state.deletedTask);
    },
    setActiveTask: (state, action) => {
      console.log('setActiveTask');
      state.activeTask = action.payload;
      console.log(state.activeTask);
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

export const {
  setBoard,
  changeIsOpenModalColumn,
  setDeletedColumn,
  setActiveColumn,
  changeIsOpenModalTask,
  setDeletedTask,
  setActiveTask,
} = boardSlice.actions;

export default boardSlice.reducer;
