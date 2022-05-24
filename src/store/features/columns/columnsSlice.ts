import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IColumn } from '../../../api/types';
import columnsService, { IPropsAddColumn, IPropsDeleteColumn } from '../../../api/columnsService';
import { getBoard } from '../board/boardSlice';

const initialState: {
  loading: boolean;
  isOpenModalColumns: {
    formAdd: boolean;
    confirmDelete: boolean;
  };
  deletedColumn: IColumn | null;
  activeColumn: IColumn | null;
} = {
  loading: false,
  isOpenModalColumns: {
    formAdd: false,
    confirmDelete: false,
  },
  deletedColumn: null,
  activeColumn: null,
};

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async (props: IPropsAddColumn, { rejectWithValue, dispatch }) => {
    await columnsService.create(props);

    dispatch(getBoard({ id: props.boardId }));
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (props: IPropsDeleteColumn, { rejectWithValue, dispatch }) => {
    await columnsService.delete(props);

    dispatch(getBoard({ id: props.boardId }));
  }
);

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    changeIsOpenModalColumns: (state, action) => {
      state.isOpenModalColumns = {
        ...state.isOpenModalColumns,
        ...action.payload,
      };
    },
    setDeletedColumn: (state, action) => {
      state.deletedColumn = action.payload;
    },
    setActiveColumn: (state, action) => {
      state.activeColumn = action.payload;
    },
  },
});

export const { changeIsOpenModalColumns, setDeletedColumn, setActiveColumn } = columnsSlice.actions;

export default columnsSlice.reducer;
