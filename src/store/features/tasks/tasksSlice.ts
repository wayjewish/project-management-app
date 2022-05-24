import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ITask } from '../../../api/types';
import tasksService, {
  IPropsAddTask,
  IPropsDeleteTask,
  IPropsUpdateTask,
} from '../../../api/tasksService';
import { getBoard } from '../board/boardSlice';

const initialState: {
  loading: boolean;
  isOpenModalTasks: {
    formAdd: boolean;
    formEdit: boolean;
    confirmDelete: boolean;
  };
  deletedTask: ITask | null;
  activeTask: ITask | null;
} = {
  loading: false,
  isOpenModalTasks: {
    formAdd: false,
    formEdit: false,
    confirmDelete: false,
  },
  deletedTask: null,
  activeTask: null,
};

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (props: IPropsAddTask, { rejectWithValue, dispatch }) => {
    await tasksService.create(props);

    dispatch(getBoard({ id: props.boardId }));
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (props: IPropsUpdateTask, { rejectWithValue, dispatch }) => {
    await tasksService.update(props);

    dispatch(getBoard({ id: props.boardId }));
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (props: IPropsDeleteTask, { rejectWithValue, dispatch }) => {
    await tasksService.delete(props);

    dispatch(getBoard({ id: props.boardId }));
  }
);

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    changeIsOpenModalTasks: (state, action) => {
      state.isOpenModalTasks = {
        ...state.isOpenModalTasks,
        ...action.payload,
      };
    },
    setDeletedTask: (state, action) => {
      state.deletedTask = action.payload;
    },
    setActiveTask: (state, action) => {
      state.activeTask = action.payload;
    },
  },
});

export const { changeIsOpenModalTasks, setDeletedTask, setActiveTask } = tasksSlice.actions;

export default tasksSlice.reducer;
