import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IBoard {
  id: string;
  title: string;
  description: string;
}

interface ITitleDescription {
  title: string;
  description: string;
}

const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OWQzMTczMy03NTE0LTQ0MzQtYTNjZC0xZjUxMTIyOTMyZWMiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjUyNzM1NjA1fQ.FPhPjvKQg_Cnz6yK9e-bvsYCmUwkTWJSst4zfGV8AGo',
  'Content-Type': 'application/json;charset=utf-8',
};

const initialState: {
  boards: {
    id: string;
    title: string;
    description: string;
  }[];
  isOpenModalConfirm: boolean;
  loading: boolean;
} = {
  boards: [],
  isOpenModalConfirm: false,
  loading: false,
};

export const getBoards: AsyncThunk<void, void, {}> = createAsyncThunk(
  'board/getBoards',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get<IBoard[]>('https://morning-lowlands-47809.herokuapp.com/boards', {
      headers,
    });
    dispatch(setBoards(res.data));
  }
);

export const addBoard: AsyncThunk<void, ITitleDescription, {}> = createAsyncThunk(
  'board/addBoard',
  async (board, { rejectWithValue, dispatch }) => {
    await fetch(`https://morning-lowlands-47809.herokuapp.com/boards`, {
      headers,
      method: 'POST',
      body: JSON.stringify({ title: board.title, description: board.description }),
    }).then((response) => response.json());
    const res = await axios.get<IBoard[]>('https://morning-lowlands-47809.herokuapp.com/boards', {
      headers,
    });
    dispatch(setBoards(res.data));
  }
);

export const deleteBoardById: AsyncThunk<void, string, {}> = createAsyncThunk(
  'board/deleteBoardById',
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://morning-lowlands-47809.herokuapp.com/boards/${id}`, { headers });
    dispatch(deleteBoard(id));
  }
);

export const BoardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
    deleteBoard: (state, action) => {
      state.boards = state.boards.filter((board) => {
        return board.id !== action.payload;
      });
    },
  },
  extraReducers: {
    [getBoards.pending.type]: (state) => {
      state.loading = false;
    },
    [getBoards.fulfilled.type]: (state) => {
      state.loading = true;
    },
    [getBoards.rejected.type]: () => {
      console.log('Не может занрузиться Boards');
    },
  },
});

export const { deleteBoard, setBoards } = BoardSlice.actions;

export default BoardSlice.reducer;
