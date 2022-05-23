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
import { CloseIconBox, FormInputsBox, CircularProgressBox } from './TaskFormAdd.styled';
import CloseIcon from '@mui/icons-material/Close';

import { ITaskData } from '../../../../api/types';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  addTask,
  changeIsOpenModalTask,
  setActiveColumn,
} from '../../../../store/features/board/boardSlice';
import { getUsers } from '../../../../store/features/users/usersSlice';

function TaskFormAdd() {
  const dispatch = useAppDispatch();
  const { board, activeColumn, isOpenModalTask } = useAppSelector((state) => state.board);
  const users = useAppSelector((state) => state.users);

  const initialData: ITaskData = {
    title: '',
    description: '',
    userId: '',
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
    dispatch(changeIsOpenModalTask({ formAdd: false }));
    dispatch(setActiveColumn(null));
    setData(initialData);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (board && activeColumn) {
      dispatch(addTask({ boardId: board.id, columnId: activeColumn.id, data }));
    }
    handleClose();
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return ReactDOM.createPortal(
    <Dialog fullWidth maxWidth="sm" open={isOpenModalTask.formAdd} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">Create task</DialogTitle>
      <DialogContent>
        {users.loading && (
          <CircularProgressBox>
            <CircularProgress />
          </CircularProgressBox>
        )}
        {!users.loading && users.users && (
          <Box id="addTask" component="form" onSubmit={handlerSubmit} autoComplete="off">
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
        <Button variant="contained" type="submit" form="addTask">
          Create
        </Button>
      </DialogActions>
    </Dialog>,
    document.body
  );
}

export default TaskFormAdd;
