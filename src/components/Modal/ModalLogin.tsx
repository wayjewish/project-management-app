import React, { useState } from 'react';
import { Button, TextField, Box, Dialog, Typography, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { closeModalLogin } from '../../store/features/modalLogin/modalLoginSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ModalSingup from './ModalSingup';
import { useLocation, useNavigate } from 'react-router-dom';
import { openModalSingup } from '../../store/features/modalSingUp/modalSingupSlice';

const inputFieldValues = [
  {
    name: 'Login',
    label: 'Login',
    id: 'my-login',
  },
  {
    name: 'Password',
    label: 'Password',
    id: 'my-password',
  },
];

const ModalLogin = () => {
  const dispatch = useAppDispatch();
  const { isOpenedLogin } = useAppSelector((state) => state.modalLogin);

  let navigate = useNavigate();
  function onDismiss() {
    navigate(-1);
    dispatch(closeModalLogin());
  }

  return (
    <form noValidate autoComplete="off">
      <Dialog open={isOpenedLogin} onClose={onDismiss}>
        <Box p={2} maxWidth={'420px'}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h5">Login</Typography>
            <CloseIcon onClick={onDismiss} />
          </Box>
          {inputFieldValues.map((inputFieldValue, index) => {
            return (
              <TextField
                key={index}
                name={inputFieldValue.name}
                label={inputFieldValue.label}
                type={inputFieldValue.label}
                fullWidth
                autoComplete="none"
                margin="normal"
              />
            );
          })}
          <Box display={'flex'} flexDirection={'column'}>
            <Button variant="contained" size="large" color="primary">
              Login
            </Button>
            <Link 
              onClick={() => {
                dispatch(openModalSingup());
                dispatch(closeModalLogin());
              } }>
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
