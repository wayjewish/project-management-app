import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../api/types';
import usersService from '../../api/usersService';
import { addAlert } from './appSlice';
import { setIsAuth, setToken } from './authSlice';

const initialState: {
  users: IUser[] | null;
  loading: boolean;
} = {
  users: null,
  loading: false,
};

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await usersService.getAll();

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
      dispatch(setUsers(res.data));
    }
  }
);

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: {
    [getUsers.pending.type]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled.type]: (state) => {
      state.loading = false;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
