import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import authService, { IPropsSignIn, IPropsSignUp } from '../../api/authService';
import usersService from '../../api/usersService'

import { IErrorApi, IUserData } from '../../api/types';
import * as jose from 'jose';
import { useAppSelector } from '../hooks';


export type ILang = 'en' | 'ru';

export interface IAuthState {
  lang: ILang;
  isAuth: boolean;
  token: string | null;
  userId: string | null;
  signIn: {
    isLoading: boolean;
    isSuccess: boolean;
    error: IErrorApi | null;
  };
  signUp: {
    isLoading: boolean;
    isSuccess: boolean;
    error: IErrorApi | null;
  };
  editProfile: {
    isLoading: boolean;
    isSuccess: boolean;
    error: IErrorApi | null;
  };
}

const initialState: IAuthState = {
  lang: localStorage.getItem('lang') ? (localStorage.getItem('lang') as ILang) : 'en',
  isAuth: localStorage.getItem('isAuth') === 'true' ? true : false,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  userId: null,
  signIn: {
    isLoading: false,
    isSuccess: false,
    error: null,
  },
  signUp: {
    isLoading: false,
    isSuccess: false,
    error: null,
  },
  editProfile: {
    isLoading: false,
    isSuccess: false,
    error: null,
  },
};

export const TokenJWTDecoder = createAsyncThunk(
  'auth/userId',
  async (token : string | null ,{ rejectWithValue, dispatch})=>{
    const res = await jose.decodeJwt(token as string);
    dispatch(setUserId(res.userId))
 }
);

export const signInRequest = createAsyncThunk(
  'auth/signIn',
  async (props: IPropsSignIn, { rejectWithValue, dispatch }) => {
    const res = await authService.signin(props);

    if (res.catch) {
      dispatch(
        setsignIn({
          error: {
            code: res.data.statusCode,
            message: res.data.message,
          },
        })
      );
    } else {
      dispatch(setIsAuth(true));
      dispatch(setToken(res.data.token));

      dispatch(
        setsignIn({
          isSuccess: true,
          error: null,
        })
      );
    }
  }
);

export const signUpRequest = createAsyncThunk(
  'auth/signUp',
  async (props: IPropsSignUp, { rejectWithValue, dispatch }) => {
    const res = await authService.signup(props);

    if (res.catch) {
      dispatch(
        setsignUp({
          error: {
            code: res.data.statusCode,
            message: res.data.message,
          },
        })
      );
    } else {
      dispatch(
        setsignUp({
          isSuccess: true,
          error: null,
        })
      );
    }
  }
);

export const editProfileRequest = createAsyncThunk(
  'auth/editProfile',
  async (props:IUserData, { rejectWithValue, dispatch }) => {

    const res = await usersService.update(userId, props);

    if (res.catch) {
      dispatch(
        setEditProfile({
          error: {
            code: res.data.statusCode,
            message: res.data.message,
          },
        })
      );
    } else {
      dispatch(
        setEditProfile({
          isSuccess: true,
          error: null,
        })
      );
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
      localStorage.setItem('isAuth', String(action.payload));
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      if (typeof action.payload === 'string') {
        localStorage.setItem('token', action.payload);
      }
    },
    setsignIn: (state, action) => {
      state.signIn = {
        ...state.signIn,
        ...action.payload,
      };
    },
    setsignUp: (state, action) => {
      state.signUp = {
        ...state.signUp,
        ...action.payload,
      };
    },
<<<<<<< HEAD
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    setEditProfile: (state, action) => {
      state.editProfile = {
        ...state.editProfile,
        ...action.payload,
      };
=======
    setLang: (state, action: PayloadAction<ILang>) => {
      state.lang = action.payload;
      localStorage.setItem('lang', action.payload);
>>>>>>> origin/develop
    },
  },
  extraReducers: {
    [signInRequest.pending.type]: (state) => {
      state.signIn.isLoading = true;
    },
    [signInRequest.fulfilled.type]: (state) => {
      state.signIn.isLoading = false;
    },
    [signUpRequest.pending.type]: (state) => {
      state.signIn.isLoading = true;
    },
    [signUpRequest.fulfilled.type]: (state) => {
      state.signIn.isLoading = false;
    },
    [editProfileRequest.pending.type]: (state) => {
      state.editProfile.isLoading = true;
    },
    [editProfileRequest.fulfilled.type]: (state) => {
      state.editProfile.isLoading = false;
    },
  },
});

<<<<<<< HEAD
export const { setIsAuth, setToken, setsignIn, setsignUp, setUserId, setEditProfile  } = authSlice.actions;
=======
export const { setIsAuth, setToken, setsignIn, setsignUp, setLang } = authSlice.actions;
>>>>>>> origin/develop

export default authSlice.reducer;
