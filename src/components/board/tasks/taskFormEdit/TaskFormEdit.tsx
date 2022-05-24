import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  SelectChangeEvent,
} from '@mui/material';
import { CloseIconBox, FormInputsBox, CircularProgressBox } from './TaskFormEdit.styled';
import CloseIcon from '@mui/icons-material/Close';
import { ITaskData } from '../../../../api/types';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  changeIsOpenModalTasks,
  setActiveTask,
  setDeletedTask,
  updateTask,
} from '../../../../store/features/tasks/tasksSlice';
import { getUsers } from '../../../../store/features/users/usersSlice';

function TaskFormEdit() {
  const dispatch = useAppDispatch();
  const { activeTask, isOpenModalTasks } = useAppSelector((state) => state.tasks);
  const users = useAppSelector((state) => state.users);

  const initialData: ITaskData = {
    title: activeTask ? activeTask.title : '',
    description: activeTask ? activeTask.description : '',
    userId: activeTask ? activeTask.userId : '',
  };

  const [data, setData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleChangeSelect = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClose = () => {
    dispatch(changeIsOpenModalTasks({ formEdit: false }));
    dispatch(setActiveTask(null));
    setData(initialData);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (activeTask) {
      /*dispatch(
        updateTask({
          boardId: activeTask.boardId,
          columnId: activeTask.columnId,
          id: activeTask.id,
          data,
        })
      );*/
    }
    handleClose();
  };

  const handleClickRemove = () => {
    dispatch(setDeletedTask({ ...activeTask }));
    dispatch(changeIsOpenModalTasks({ confirmDelete: true, formEdit: false }));
    dispatch(setActiveTask(null));
    setData(initialData);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return ReactDOM.createPortal(
    <Dialog fullWidth maxWidth="sm" open={isOpenModalTasks.formEdit} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">Edit task</DialogTitle>
      <DialogContent>
        {users.loading && (
          <CircularProgressBox>
            <CircularProgress />
          </CircularProgressBox>
        )}
        {!users.loading && users.users && (
          <Box id="editTask" component="form" onSubmit={handlerSubmit} autoComplete="off">
            <FormInputsBox>
              <TextField
                name="title"
                label="Title"
                variant="outlined"
                value={data.title}
                onChange={handleChange}
              />
              <TextField
                name="description"
                label="Description"
                variant="outlined"
                value={data.description}
                onChange={handleChange}
              />
              <Select
                name="userId"
                label="User"
                variant="outlined"
                value={data.userId}
                onChange={handleChangeSelect}
              >
                {users.users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
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
