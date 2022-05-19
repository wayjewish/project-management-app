import React from 'react';
import { Button, Link, TextField, Box, Dialog, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { closeModalLogin } from '../../store/features/modalLogin/modalLoginSlice';
import { openModalSingup } from '../../store/features/modalSingUp/modalSingupSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ModalSingup from './ModalSingup';

const ModalLogin = () => {
  const dispatch = useAppDispatch();
  const { isOpenedLogin } = useAppSelector((state) => state.modalLogin);

  return (
    <form noValidate autoComplete="off">
      <Dialog open={isOpenedLogin} onClose={() => dispatch(closeModalLogin())}>
        <Box p={2} maxWidth={'420px'}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h5">Login</Typography>
            <CloseIcon onClick={() => dispatch(closeModalLogin())} />
          </Box>
          <TextField
            fullWidth
            id="login"
            type="text"
            label="Login"
            placeholder="Login"
            margin="normal"
          />
          <TextField
            fullWidth
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
            margin="normal"
          />
          <Box display={'flex'} flexDirection={'column'}>
            <Button variant="contained" size="large" color="primary">
              Login
            </Button>
            <Link
              onClick={() => {
                dispatch(closeModalLogin());
                dispatch(openModalSingup());
              }}
            >
              {' '}
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
