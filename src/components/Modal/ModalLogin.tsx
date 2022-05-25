import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, TextField, Box, Dialog, Typography, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { yupResolver } from '@hookform/resolvers/yup';

import { validationSchema } from './Validate'
import { closeModalLogin } from '../../store/features/modalLogin/modalLoginSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ModalSingup from './ModalSingup';
import { openModalSingup } from '../../store/features/modalSingUp/modalSingupSlice';


const ModalLogin = () => {
  const dispatch = useAppDispatch();
  const { isOpenedLogin } = useAppSelector((state) => state.modalLogin);

  let navigate = useNavigate();

  const onDismiss = () => {
    navigate(-1);
    dispatch(closeModalLogin());
  };


  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <form noValidate autoComplete="off">
      <Dialog open={isOpenedLogin} onClose={onDismiss} fullWidth maxWidth="sm">
        <Box p={2} >
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h5">Login</Typography>
            <CloseIcon onClick={onDismiss} style={{cursor:'pointer'}} />
          </Box>
          <TextField
            fullWidth
            type="text"
            label="Login"
            placeholder="Login"
            {...register('login')}
            required
            error={errors.login ? true : false}
            helperText={errors.login?.message}
            variant="outlined"
            margin="dense"
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            placeholder="Password"
            {...register('password')}
            required
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            variant="outlined"
            margin="dense"
          />
          <Box display={'flex'} flexDirection={'column'}>
            <Button variant="contained" size="large" color="primary" onClick={handleSubmit(onSubmit)}>
              Login
            </Button>
            <Link
              onClick={() => {
                dispatch(closeModalLogin());
                setTimeout(() => {
                  dispatch(openModalSingup());
                }, 500);
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
