import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';
import { CloseIconBox, FormInputsBox } from './TaskFormAdd.styled';
import CloseIcon from '@mui/icons-material/Close';
import Loading from '../../../loading/Loading';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setActiveColumn } from '../../../../store/features/columnsSlice';
import { changeIsOpenModalTasks, addTask } from '../../../../store/features/tasksSlice';
import { getUsers } from '../../../../store/features/usersSlice';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

interface IFormValues {
  title: string;
  description: string;
  userId: string;
}

function TaskFormAdd() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);
  const { activeColumn } = useAppSelector((state) => state.columns);
  const { isOpenModalTasks } = useAppSelector((state) => state.tasks);
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
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormValues) => {
    if (board && activeColumn) {
      dispatch(addTask({ boardId: board.id, columnId: activeColumn.id, data }));
    }
    handleClose();
  };

  const handleClose = () => {
    dispatch(changeIsOpenModalTasks({ formAdd: false }));
    dispatch(setActiveColumn(null));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return ReactDOM.createPortal(
    <Dialog fullWidth maxWidth="sm" open={isOpenModalTasks.formAdd} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">{t('pages.board.tasks.forms.add.title')}</DialogTitle>
      <DialogContent>
        {users.loading && <Loading />}
        {!users.loading && users.users && (
          <Box id="addTask" component="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <FormInputsBox>
              <TextField
                id="title"
                type="text"
                label={t('pages.board.tasks.forms.add.fields.title')}
                placeholder={t('pages.board.tasks.forms.add.fields.title')}
                {...register('title')}
                required
                error={errors.title ? true : false}
                helperText={errors.title?.message}
                variant="outlined"
              />
              <TextField
                id="description"
                type="text"
                label={t('pages.board.tasks.forms.add.fields.description')}
                placeholder={t('pages.board.tasks.forms.add.fields.description')}
                {...register('description')}
                required
                error={errors.description ? true : false}
                helperText={errors.description?.message}
                variant="outlined"
              />
              <TextField
                select
                id="userId"
                type="text"
                label={t('pages.board.tasks.forms.add.fields.user')}
                placeholder={t('pages.board.tasks.forms.add.fields.user')}
                inputProps={register('userId')}
                error={errors.userId ? true : false}
                helperText={errors.userId?.message}
                variant="outlined"
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
        <Button variant="contained" type="submit" form="addTask">
          {t('button.create')}
        </Button>
      </DialogActions>
    </Dialog>,
    document.body
  );
}

export default TaskFormAdd;
