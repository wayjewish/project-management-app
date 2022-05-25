import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Link, TextField, Typography, Box, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { openModalLogin } from '../../store/features/modalLogin/modalLoginSlice';
import { closeModalSingup } from '../../store/features/modalSingUp/modalSingupSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ModalLogin from './ModalLogin';
import { validationSchema } from './Validate'


export default function ModalSingup() {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isOpenedSingup } = useAppSelector((state) => state.modalSingup);

  const onDismiss = () => {
    navigate(-1);
    dispatch(closeModalSingup());
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
      <Dialog open={isOpenedSingup} onClose={onDismiss} fullWidth maxWidth="sm">
        <Box p={2} >
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h5">Sing up</Typography>
            <CloseIcon onClick={onDismiss} style={{ cursor: 'pointer' }} />
          </Box>
          <TextField
            fullWidth
            id="name"
            type="text"
            label="Name"
            placeholder="Name"
            {...register('name')}
            required
            error={errors.name ? true : false}
            helperText={errors.name?.message}
            variant="outlined"
            margin="dense"
          />

          <TextField
            fullWidth
            id="login"
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
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
            {...register('password')}
            required
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            margin="dense"
          />

          <Box display={'flex'} flexDirection={'column'}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Sing up
            </Button>
            <Link
              onClick={() => {
                setTimeout(() => {
                  dispatch(openModalLogin());
                }, 500);
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
