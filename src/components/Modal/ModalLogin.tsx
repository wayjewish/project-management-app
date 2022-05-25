import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Dialog, Typography, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { closeModalLogin } from '../../store/features/modalLogin/modalLoginSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ModalSingup from './ModalSingup';
import { openModalSingup } from '../../store/features/modalSingUp/modalSingupSlice';
import { IFormDataErrorLogin, IFormDataLogin } from '../../types';

const ModalLogin = () => {
  const dispatch = useAppDispatch();
  const { isOpenedLogin } = useAppSelector((state) => state.modalLogin);

  let navigate = useNavigate();

  const onDismiss = () => {
    navigate(-1);
    dispatch(closeModalLogin());
  };

  const [form, setForm] = useState<IFormDataLogin>({
    login: '',
    password: '',
  });

  const [error, setError] = useState<IFormDataErrorLogin>({
    loginTextError: '',
    loginError: false,
    passwordTextError: '',
    passwordError: false,
    disabled: true,
  });

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.currentTarget.value,
    });
    validateForm();
  };

  const validateForm = () => {
    if (form.login.length == 0) {
      return setError({ ...error, loginTextError: 'Login is required', loginError: true });
    }
    if (form.password.length == 0) {
      return setError({ ...error, passwordTextError: 'Password is required', passwordError: true });
    }
    if (form.password.length < 8) {
      return setError({
        ...error,
        passwordTextError: 'Password must have a minimum 8 characters',
        passwordError: true,
      });
    }
    return setError({
      ...error,
      loginTextError: '',
      loginError: false,
      passwordTextError: '',
      passwordError: false,
      disabled: false
    });
  };

  return (
    <form noValidate autoComplete="off">
      <Dialog open={isOpenedLogin} onClose={onDismiss}>
        <Box p={2} maxWidth={'420px'}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h5">Login</Typography>
            <CloseIcon onClick={onDismiss} />
          </Box>
          <TextField
            fullWidth
            id="login"
            type="text"
            name="login"
            label="Login"
            placeholder="Login"
            margin="normal"
            value={form.login}
            onChange={updateForm}
            required
            error={Boolean(error?.loginError)}
            helperText={error?.loginTextError}
            variant="outlined"
          />
          <TextField
            fullWidth
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            margin="normal"
            value={form.password}
            onChange={updateForm}
            required
            error={Boolean(error?.passwordError)}
            helperText={error?.passwordTextError}
            variant="outlined"
          />
          <Box display={'flex'} flexDirection={'column'}>
            <Button variant="contained" size="large" color="primary" disabled={error?.disabled}>
              Login
            </Button>
            <Link
              onClick={() => {
                dispatch(openModalSingup());
                dispatch(closeModalLogin());
              }}
            >
              Create account
            </Link>
            <ModalSingup />
          </Box>
        </Box>
      </Dialog>
    </form>
  );
};

export default ModalLogin;
