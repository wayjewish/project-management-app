import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IErrorApi, ITask } from '../../api/types';
import tasksService, {
  IPropsAddTask,
  IPropsDeleteTask,
  IPropsGetTask,
  IPropsUpdateTask,
} from '../../api/tasksService';
import { getBoard, setBoard } from './boardSlice';

const initialState: {
  isOpenModalTasks: {
    formAdd: boolean;
    formEdit: boolean;
    confirmDelete: boolean;
  };
  deletedTask: ITask | null;
  activeTask: ITask | null;
  dragTask: ITask | null;
  errorsTasks: {
    dnd: IErrorApi | null;
  };
} = {
  isOpenModalTasks: {
    formAdd: false,
    formEdit: false,
    confirmDelete: false,
  },
  deletedTask: null,
  activeTask: null,
  dragTask: null,
  errorsTasks: {
    dnd: null,
  },
};

export const getTask = createAsyncThunk(
  'tasks/getTask',
  async (props: IPropsGetTask, { rejectWithValue, dispatch }) => {
    const res = await tasksService.get(props);

    dispatch(setActiveTask(res.data));
  }
);

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

export const updateTaskDND = createAsyncThunk(
  'tasks/updateTaskDND',
  async (props: IPropsUpdateTask, { rejectWithValue, dispatch }) => {
    const res = await tasksService.update(props);

    if (res.catch) {
      dispatch(
        setErrorsTasks({
          dnd: {
            code: res.data.statusCode,
            message: res.data.message,
          },
        })
      );
      dispatch(getBoard({ id: props.boardId }));
    }
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
    setDragTask: (state, action) => {
      state.dragTask = action.payload;
    },
    setErrorsTasks: (state, action) => {
      state.errorsTasks = {
        ...state.errorsTasks,
        ...action.payload,
      };
    },
  },
});

export const {
  changeIsOpenModalTasks,
  setDeletedTask,
  setActiveTask,
  setDragTask,
  setErrorsTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
