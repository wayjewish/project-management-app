import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import authService, { IPropsSignIn, IPropsSignUp } from '../../api/authService';
import { IErrorApi } from '../../api/types';

export type ILang = 'en' | 'ru';

export interface IAuthState {
  isAuth: boolean;
  token: string | null;
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
  lang: ILang;
}

const initialState: IAuthState = {
  isAuth: localStorage.getItem('isAuth') === 'true' ? true : false,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
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
  lang: localStorage.getItem('lang') ? (localStorage.getItem('lang') as ILang) : 'en',
};

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
    setLang: (state, action: PayloadAction<ILang>) => {
      state.lang = action.payload;
      localStorage.setItem('lang', action.payload);
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
  },
});

export const { setIsAuth, setToken, setsignIn, setsignUp, setLang } = authSlice.actions;

export default authSlice.reducer;
