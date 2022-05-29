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

function TaskFormEdit() {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);
  const { activeColumn } = useAppSelector((state) => state.columns);
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
    dispatch(setActiveColumn(null));
    dispatch(setActiveTask(null));
    setData(initialData);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              <FormControl>
                <InputLabel>User</InputLabel>
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
              </FormControl>
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
