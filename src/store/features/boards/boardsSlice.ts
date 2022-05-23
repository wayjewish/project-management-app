import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBoard, IBoardData } from '../../../api/types';
import boardsService from '../../../api/boardsService';

const initialState: {
  boards: IBoard[] | null;
  isLoading: boolean;
  isOpenModal: {
    formAdd: boolean;
    confirmDelete: boolean;
  };
  deletedBoard: IBoard | null;
} = {
  boards: null,
  isLoading: false,
  isOpenModal: {
    formAdd: false,
    confirmDelete: false,
  },
  deletedBoard: null,
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

    dispatch(getBoards());
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id: string, { rejectWithValue, dispatch }) => {
    await boardsService.delete(id);

    dispatch(getBoards());
  }
);

export const boardsSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
    changeIsOpenModal: (state, action) => {
      state.isOpenModal = {
        ...state.isOpenModal,
        ...action.payload,
      };
    },
    setDeletedBoard: (state, action) => {
      state.deletedBoard = action.payload;
    },
    openConfirmDelete: (state, action) => {
      state.deletedBoard = action.payload.deletedBoard;
      state.isOpenModal.confirmDelete = action.payload.isOpen;
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

export const { setBoards, changeIsOpenModal, setDeletedBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
