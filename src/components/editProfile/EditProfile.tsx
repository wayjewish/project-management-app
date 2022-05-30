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
import { CloseIconBox, FormInputsBox } from './EditProfile.styled';
import Loading from '../loading/Loading';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { editProfileRequest, setEditProfile } from '../../store/features/authSlice';
import { addAlert } from '../../store/features/appSlice';
import { getUser } from '../../store/features/usersSlice';

import { useTranslation } from 'react-i18next';

interface IFormValues {
  name: string;
  login: string;
  password: string;
}

const EditProfile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userId, editProfile } = useAppSelector((state) => state.auth);
  const users = useAppSelector((state) => state.users);

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
    console.log(data);

    if (userId) {
      dispatch(editProfileRequest({ id: userId, data }));
    }
  };

  const handleClose = () => {
    dispatch(
      setEditProfile({
        error: null,
      })
    );

    navigate(-1);
  };

  useEffect(() => {
    if (userId) {
      dispatch(getUser({ id: userId }));
    }
  }, [userId]);

  useEffect(() => {
    if (editProfile.isSuccess) {
      handleClose();
      reset();

      dispatch(
        setEditProfile({
          isSuccess: false,
        })
      );

      dispatch(
        addAlert({
          type: 'success',
          message: 'User updated',
        })
      );
    }
  }, [editProfile.isSuccess]);

  return (
    <Dialog fullWidth maxWidth="sm" open={true} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">{t('editProfile.title')}</DialogTitle>
      <DialogContent>
        {users.loading && <Loading />}
        {!users.loading && users.user && (
          <Box id="signUp" component="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <FormInputsBox>
              <TextField
                id="name"
                type="text"
                label={t('editProfile.fields.name')}
                placeholder={t('editProfile.fields.name')}
                {...register('name')}
                required
                error={errors.name ? true : false}
                helperText={errors.name?.message}
                variant="outlined"
                defaultValue={users.user.name}
              />
              <TextField
                id="login"
                type="text"
                label={t('editProfile.fields.login')}
                placeholder={t('editProfile.fields.login')}
                {...register('login')}
                required
                error={errors.login ? true : false}
                helperText={errors.login?.message}
                variant="outlined"
                defaultValue={users.user.login}
              />
              <TextField
                id="password"
                type="password"
                label={t('editProfile.fields.password')}
                placeholder={t('editProfile.fields.password')}
                {...register('password')}
                required
                error={errors.password ? true : false}
                helperText={errors.password?.message}
                variant="outlined"
              />
              {editProfile.error && (
                <Typography component="p" color="error">
                  {editProfile.error.message}
                </Typography>
              )}
            </FormInputsBox>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        {editProfile.isLoading ? (
          <Loading />
        ) : (
          <Button variant="contained" type="submit" form="signUp">
            {t('editProfile.title')}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default EditProfile;
