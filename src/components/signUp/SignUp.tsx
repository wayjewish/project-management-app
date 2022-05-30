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
import { CloseIconBox, FormInputsBox } from './SignUp.styled';
import Loading from '../loading/Loading';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setsignUp, signUpRequest } from '../../store/features/authSlice';
import { addAlert } from '../../store/features/appSlice';

import { useTranslation } from 'react-i18next';

interface IFormValues {
  name: string;
  login: string;
  password: string;
}

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { signUp } = useAppSelector((state) => state.auth);

  const schema = yup
    .object({
      name: yup.string().required('Name is required'),
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
    dispatch(signUpRequest(data));
  };

  const handleClose = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (signUp.isSuccess) {
      handleClose();
      reset();

      dispatch(
        setsignUp({
          isSuccess: false,
        })
      );

      dispatch(
        addAlert({
          type: 'success',
          message: 'User created',
        })
      );
    }
  }, [signUp.isSuccess]);

  return (
    <Dialog fullWidth maxWidth="sm" open={true} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">{t('signup.title')}</DialogTitle>
      <DialogContent>
        <Box id="signUp" component="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormInputsBox>
            <TextField
              id="name"
              type="text"
              label={t('signup.fields.name')}
              placeholder={t('signup.fields.name')}
              {...register('name')}
              required
              error={errors.name ? true : false}
              helperText={errors.name?.message}
              variant="outlined"
            />
            <TextField
              id="login"
              type="text"
              label={t('signup.fields.login')}
              placeholder={t('signup.fields.login')}
              {...register('login')}
              required
              error={errors.login ? true : false}
              helperText={errors.login?.message}
              variant="outlined"
            />
            <TextField
              id="password"
              type="password"
              label={t('signup.fields.password')}
              placeholder={t('signup.fields.password')}
              {...register('password')}
              required
              error={errors.password ? true : false}
              helperText={errors.password?.message}
              variant="outlined"
            />
            {signUp.error && (
              <Typography component="p" color="error">
                {signUp.error.message}
              </Typography>
            )}
          </FormInputsBox>
        </Box>
      </DialogContent>
      <DialogActions>
        {signUp.isLoading ? (
          <Loading />
        ) : (
          <Button variant="contained" type="submit" form="signUp">
            {t('signup.title')}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default SignUp;
