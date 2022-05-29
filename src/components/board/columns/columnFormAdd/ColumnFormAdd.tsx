import React, { useState } from 'react';
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
import { CloseIconBox, FormInputsBox } from './ColumnFormAdd.styled';
import CloseIcon from '@mui/icons-material/Close';
import { IColumnData } from '../../../../api/types';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { addColumn, changeIsOpenModalColumns } from '../../../../store/features/columnsSlice';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface IFormValues {
  title: string;
}

function ColumnFormAdd() {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);
  const { isOpenModalColumns } = useAppSelector((state) => state.columns);

  const schema = yup
    .object({
      title: yup.string().required('Login is required'),
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
    if (board) {
      dispatch(addColumn({ boardId: board.id, data }));
    }
    handleClose();
  };

  const handleClose = () => {
    dispatch(changeIsOpenModalColumns({ formAdd: false }));
  };

  return ReactDOM.createPortal(
    <Dialog fullWidth maxWidth="sm" open={isOpenModalColumns.formAdd} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">Create column</DialogTitle>
      <DialogContent>
        <Box id="addColumn" component="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormInputsBox>
            <TextField
              id="title"
              type="text"
              label="Title"
              placeholder="Title"
              {...register('title')}
              required
              error={errors.title ? true : false}
              helperText={errors.title?.message}
              variant="outlined"
            />
          </FormInputsBox>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" type="submit" form="addColumn">
          Create
        </Button>
      </DialogActions>
    </Dialog>,
    document.body
  );
}

export default ColumnFormAdd;
