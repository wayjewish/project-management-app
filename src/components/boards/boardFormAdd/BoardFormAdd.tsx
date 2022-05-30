import React from 'react';
import ReactDOM from 'react-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  Button,
} from '@mui/material';
import { CloseIconBox, FormInputsBox } from './BoardFormAdd.styled';
import CloseIcon from '@mui/icons-material/Close';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addBoard, changeIsOpenModalBoards } from '../../../store/features/boardsSlice';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

interface IFormValues {
  title: string;
  description: string;
}

export default function BoardFormAdd() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isOpenModalBoards } = useAppSelector((state) => state.boards);

  const schema = yup
    .object({
      title: yup.string().required('Login is required'),
      description: yup.string().required('Description is required'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormValues) => {
    dispatch(addBoard({ data }));
    handleClose();
  };

  const handleClose = () => {
    dispatch(changeIsOpenModalBoards({ formAdd: false }));
  };

  return ReactDOM.createPortal(
    <Dialog fullWidth maxWidth="sm" open={isOpenModalBoards.formAdd} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">{t('pages.boards.forms.add.title')}</DialogTitle>
      <DialogContent>
        <Box id="addBoard" component="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormInputsBox>
            <TextField
              id="title"
              type="text"
              label={t('pages.boards.forms.add.fields.title')}
              placeholder={t('pages.boards.forms.add.fields.title')}
              {...register('title')}
              required
              error={errors.title ? true : false}
              helperText={errors.title?.message}
              variant="outlined"
            />
            <TextField
              id="description"
              type="text"
              label={t('pages.boards.forms.add.fields.description')}
              placeholder={t('pages.boards.forms.add.fields.description')}
              {...register('description')}
              required
              error={errors.description ? true : false}
              helperText={errors.description?.message}
              variant="outlined"
            />
          </FormInputsBox>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" type="submit" form="addBoard">
          {t('button.create')}
        </Button>
      </DialogActions>
    </Dialog>,
    document.body
  );
}
