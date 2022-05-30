import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBoard } from '../../api/types';
import boardsService, { IPropsAddBoard, IPropsDeleteBoard } from '../../api/boardsService';
import { setIsAuth, setToken } from './authSlice';
import { addAlert } from './appSlice';

const initialState: {
  boards: IBoard[] | null;
  isLoading: boolean;
  isOpenModalBoards: {
    formAdd: boolean;
    confirmDelete: boolean;
  };
  deletedBoard: IBoard | null;
} = {
  boards: null,
  isLoading: false,
  isOpenModalBoards: {
    formAdd: false,
    confirmDelete: false,
  },
  deletedBoard: null,
};

export const getBoards = createAsyncThunk(
  'boards/getBoards',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await boardsService.getAll();

    if (res.catch) {
      if (res.data.statusCode === 401) {
        dispatch(setIsAuth(false));
        dispatch(setToken(null));

        dispatch(
          addAlert({
            type: 'error',
            message: 'alert.notAuth',
          })
        );
      }
    } else {
      dispatch(setBoards(res.data));
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (props: IPropsAddBoard, { rejectWithValue, dispatch }) => {
    const res = await boardsService.create(props);

    if (res.catch) {
      if (res.data.statusCode === 401) {
        dispatch(setIsAuth(false));
        dispatch(setToken(null));

        dispatch(
          addAlert({
            type: 'error',
            message: 'alert.notAuth',
          })
        );
      }
    } else {
      dispatch(getBoards());
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (props: IPropsDeleteBoard, { rejectWithValue, dispatch }) => {
    const res = await boardsService.delete(props);

    if (res.catch) {
      if (res.data.statusCode === 401) {
        dispatch(setIsAuth(false));
        dispatch(setToken(null));

        dispatch(
          addAlert({
            type: 'error',
            message: 'alert.notAuth',
          })
        );
      }
    } else {
      dispatch(getBoards());
    }
  }
);

export const boardsSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
    changeIsOpenModalBoards: (state, action) => {
      state.isOpenModalBoards = {
        ...state.isOpenModalBoards,
        ...action.payload,
      };
    },
    setDeletedBoard: (state, action) => {
      state.deletedBoard = action.payload;
    },
  },
  extraReducers: {
    [getBoards.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addBoard.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteBoard.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBoards.fulfilled.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setBoards, changeIsOpenModalBoards, setDeletedBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
