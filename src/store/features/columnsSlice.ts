import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IColumn, IErrorApi } from '../../api/types';
import columnsService, {
  IPropsAddColumn,
  IPropsUpdateColumn,
  IPropsDeleteColumn,
} from '../../api/columnsService';
import { getBoard } from './boardSlice';
import { setIsAuth, setToken } from './authSlice';
import { addAlert } from './appSlice';

const initialState: {
  isOpenModalColumns: {
    formAdd: boolean;
    confirmDelete: boolean;
  };
  deletedColumn: IColumn | null;
  activeColumn: IColumn | null;
  dragColumn: IColumn | null;
  errorsColumns: {
    dnd: IErrorApi | null;
  };
} = {
  isOpenModalColumns: {
    formAdd: false,
    confirmDelete: false,
  },
  deletedColumn: null,
  activeColumn: null,
  dragColumn: null,
  errorsColumns: {
    dnd: null,
  },
};

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async (props: IPropsAddColumn, { rejectWithValue, dispatch }) => {
    const res = await columnsService.create(props);

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
      dispatch(getBoard({ id: props.boardId }));
    }
  }
);

export const updateColumn = createAsyncThunk(
  'columns/updateColumn',
  async (props: IPropsUpdateColumn, { rejectWithValue, dispatch }) => {
    const res = await columnsService.update(props);

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
      dispatch(getBoard({ id: props.boardId }));
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (props: IPropsDeleteColumn, { rejectWithValue, dispatch }) => {
    const res = await columnsService.delete(props);

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
      dispatch(getBoard({ id: props.boardId }));
    }
  }
);

export const updateColumnDND = createAsyncThunk(
  'columns/updateColumnDND',
  async (props: IPropsUpdateColumn, { rejectWithValue, dispatch }) => {
    const res = await columnsService.update(props);

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
      } else {
        dispatch(
          setErrorsColumns({
            dnd: {
              code: res.data.statusCode,
              message: res.data.message,
            },
          })
        );
        dispatch(getBoard({ id: props.boardId }));
      }
    }
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
    setDragColumn: (state, action) => {
      state.dragColumn = action.payload;
    },
    setErrorsColumns: (state, action) => {
      state.errorsColumns = {
        ...state.errorsColumns,
        ...action.payload,
      };
    },
  },
});

export const {
  changeIsOpenModalColumns,
  setDeletedColumn,
  setActiveColumn,
  setDragColumn,
  setErrorsColumns,
} = columnsSlice.actions;

export default columnsSlice.reducer;
