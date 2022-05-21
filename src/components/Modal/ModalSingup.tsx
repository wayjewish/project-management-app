import React from 'react';
import { Button, Link, TextField, Typography, Box, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { openModalLogin } from '../../store/features/modalLogin/modalLoginSlice';
import { closeModalSingup } from '../../store/features/modalSingUp/modalSingupSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ModalLogin from './ModalLogin';
import { useNavigate } from 'react-router-dom';

const ModalSingup = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isOpenedSingup } = useAppSelector((state) => state.modaSingup);
  function onDismiss() {
    navigate(-1);
    dispatch(closeModalSingup());
  }
  return (
    <form noValidate autoComplete="off">
      <Dialog open={isOpenedSingup} onClose={onDismiss}>
        <Box p={2} maxWidth={'420px'}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h5">Sing up</Typography>
            <CloseIcon onClick={onDismiss}/>
          </Box>
          <TextField
            fullWidth
            id="name"
            type="text"
            label="Name"
            placeholder="Name"
            margin="normal"
          />
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
};
export default ModalSingup;


