import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from '@mui/material';
import { CloseIconBox, FormInputsBox } from './TaskFormEdit.styled';
import CloseIcon from '@mui/icons-material/Close';
import { ITaskData } from '../../../../api/types';
import Loading from '../../../loading/Loading';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setActiveColumn } from '../../../../store/features/columnsSlice';
import {
  changeIsOpenModalTasks,
  setActiveTask,
  setDeletedTask,
  updateTask,
  getTask,
} from '../../../../store/features/tasksSlice';
import { getUsers } from '../../../../store/features/usersSlice';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface IFormValues {
  title: string;
  description: string;
  userId: string;
}

function TaskFormEdit() {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);
  const { activeColumn } = useAppSelector((state) => state.columns);
  const { activeTask, isOpenModalTasks } = useAppSelector((state) => state.tasks);
  const users = useAppSelector((state) => state.users);

  const schema = yup
    .object({
      title: yup.string().required('Login is required'),
      description: yup.string().required('Description is required'),
      userId: yup.string().required('User is required'),
    })
    .required();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormValues) => {
    if (activeTask && activeTask.boardId && activeTask.columnId) {
      const dataFull = {
        ...data,
        order: activeTask.order,
        boardId: activeTask.boardId,
        columnId: activeTask.columnId,
      };

      dispatch(
        updateTask({
          boardId: activeTask.boardId,
          columnId: activeTask.columnId,
          id: activeTask.id,
          data: dataFull,
        })
      );
    }
    handleClose();
  };

  const handleClose = () => {
    dispatch(changeIsOpenModalTasks({ formEdit: false }));
    dispatch(setActiveColumn(null));
    dispatch(setActiveTask(null));
  };

  const handleClickRemove = () => {
    dispatch(setDeletedTask({ ...activeTask }));
    dispatch(changeIsOpenModalTasks({ confirmDelete: true }));
    handleClose();
  };

  useEffect(() => {
    if (activeTask && !activeTask.boardId && !activeTask.columnId) {
      if (board && activeColumn) {
        dispatch(getTask({ boardId: board.id, columnId: activeColumn.id, id: activeTask.id }));
      }
    }
    dispatch(getUsers());
  }, []);

  return ReactDOM.createPortal(
    <Dialog fullWidth maxWidth="sm" open={isOpenModalTasks.formEdit} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">Edit task</DialogTitle>
      <DialogContent>
        {users.loading && <Loading />}
        {!users.loading && users.users && (
          <Box id="editTask" component="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
                defaultValue={activeTask?.title}
              />
              <TextField
                id="description"
                type="text"
                label="Description"
                placeholder="Description"
                {...register('description')}
                required
                error={errors.description ? true : false}
                helperText={errors.description?.message}
                variant="outlined"
                defaultValue={activeTask?.description}
              />
              <TextField
                select
                id="userId"
                type="text"
                label="User"
                placeholder="User"
                inputProps={register('userId')}
                error={errors.userId ? true : false}
                helperText={errors.userId?.message}
                variant="outlined"
                defaultValue={activeTask?.userId}
              >
                {users.users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
              </TextField>
            </FormInputsBox>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={handleClickRemove}>
          Remove
        </Button>
        <Button variant="contained" type="submit" form="editTask">
          Update
        </Button>
      </DialogActions>
    </Dialog>,
    document.body
  );
}

export default TaskFormEdit;
