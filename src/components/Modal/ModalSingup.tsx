import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Link, TextField, Typography, Box, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { openModalLogin } from '../../store/features/modalLogin/modalLoginSlice';
import { closeModalSingup } from '../../store/features/modalSingUp/modalSingupSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ModalLogin from './ModalLogin';
import { IFormDataSingup, IFormDataErrorSingup} from '../../types';

export default function ModalSingup() {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isOpenedSingup } = useAppSelector((state) => state.modalSingup);

  const onDismiss = () => {
    navigate(-1);
    dispatch(closeModalSingup());
  };

  const [form, setForm] = useState<IFormDataSingup>({
    name: '',
    login: '',
    password: '',
  });

  const [error, setError] = useState<IFormDataErrorSingup>({
    nameTextError: '',
    nameError: false,
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
    if (form.name.length == 0) {
      return setError({ ...error, loginTextError: 'Name is required', loginError: true,  });
    }
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
      nameTextError: '',
      nameError: false,
      loginTextError: '',
      loginError: false,
      passwordTextError: '',
      passwordError: false,
      disabled: false
    });
  };

  return (
    <form noValidate autoComplete="off">
      <Dialog open={isOpenedSingup} onClose={onDismiss}>
        <Box p={2} maxWidth={'420px'}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h5">Sing up</Typography>
            <CloseIcon onClick={onDismiss} />
          </Box>

          <TextField
            fullWidth
            id="name"
            type="text"
            name="name"
            label="Name"
            placeholder="Name"
            margin="normal"
            value={form.name}
            onChange={updateForm}
            required
            error={Boolean(error?.nameError)}
            helperText={(error?.nameTextError)}
            variant="outlined"
          />

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
            helperText={(error?.loginTextError)}
            variant="outlined"
          />
          <TextField
            fullWidth
            id="password"
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            margin="normal"
            value={form.password}
            onChange={updateForm}
            required
            error={Boolean(error?.passwordError)}
            helperText={(error?.passwordTextError)}
            variant="outlined"
          />
          <Box display={'flex'} flexDirection={'column'}>
            <Button variant="contained" size="large" color="primary" type="submit" disabled={error?.disabled}>
              Sing up
            </Button>
            <Link
              onClick={() => {
                dispatch(openModalLogin());
                dispatch(closeModalSingup());
              }}
            >
              Log in
            </Link>
            <ModalLogin />
          </Box>
        </Box>
      </Dialog>
    </form>
  );
}
