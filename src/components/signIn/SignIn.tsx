import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CloseIconBox, FormInputsBox } from './SignIn.styled';
import Loading from '../loading/Loading';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setsignIn, signInRequest } from '../../store/features/authSlice';

import { useTranslation } from 'react-i18next';

interface IFormValues {
  login: string;
  password: string;
}

const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { signIn } = useAppSelector((state) => state.auth);

  const schema = yup
    .object({
      login: yup.string().required('Login is required'),
      password: yup.string().required('Password is required'),
    })
    .required();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormValues) => {
    dispatch(signInRequest(data));
  };

  const handleClose = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (signIn.isSuccess) {
      handleClose();
      reset();

      dispatch(
        setsignIn({
          isSuccess: false,
        })
      );
      navigate('/boards', { replace: true });
    }
  }, [signIn.isSuccess]);

  return (
    <Dialog fullWidth maxWidth="sm" open={true} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">{t('signin.title')}</DialogTitle>
      <DialogContent>
        <Box id="signIn" component="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormInputsBox>
            <TextField
              id="login"
              type="text"
              label={t('signin.fields.title')}
              placeholder={t('signin.fields.title')}
              {...register('login')}
              required
              error={errors.login ? true : false}
              helperText={errors.login?.message}
              variant="outlined"
            />
            <TextField
              id="password"
              type="password"
              label={t('signin.fields.password')}
              placeholder={t('signin.fields.password')}
              {...register('password')}
              required
              error={errors.password ? true : false}
              helperText={errors.password?.message}
              variant="outlined"
            />
            {signIn.error && (
              <Typography component="p" color="error">
                {signIn.error.message}
              </Typography>
            )}
          </FormInputsBox>
        </Box>
      </DialogContent>
      <DialogActions>
        {signIn.isLoading ? (
          <Loading />
        ) : (
          <Button variant="contained" type="submit" form="signIn">
            {t('signin.title')}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default SignIn;
