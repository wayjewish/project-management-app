import React, { useEffect, useState } from 'react';
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
import { addTask } from '../../../../store/features/board/boardSlice';
import { getUsers } from '../../../../store/features/users/usersSlice';

interface IProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  columnId: string;
}

function FormAddColumn({ openModal, setOpenModal, columnId }: IProps) {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);
  const users = useAppSelector((state) => state.users);

  const [data, setData] = useState<ITaskData>({
    title: '',
    description: '',
    userId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setData({
      ...data,
      [id]: value,
    });
  };

  /*const handleChangeSelect = (e: SelectChangeEvent) => {
    const { id, value } = e.target;
    setAge(e.target.value as string);
  };*/
  /*<Select id="userId" label="User" value={data.userId} onChange={handleChangeSelect}>
                <MenuItem value={10}>Ten</MenuItem>
        </Select>*/

  const handleClose = () => {
    setOpenModal(false);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (board) {
      dispatch(addTask({ boardId: board.id, columnId, data }));
    }
    handleClose();
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Dialog fullWidth maxWidth="sm" open={openModal} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">Create column</DialogTitle>
      <DialogContent>
        {users.loading && (
          <CircularProgressBox>
            <CircularProgress />
          </CircularProgressBox>
        )}
        {!users.loading && users.users && (
          <Box id="addColumn" component="form" onSubmit={handlerSubmit} autoComplete="off">
            <FormInputsBox>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                value={data.title}
                onChange={handleChange}
              />
              <TextField
                id="description"
                label="Description"
                variant="outlined"
                value={data.description}
                onChange={handleChange}
              />
            </FormInputsBox>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" type="submit" form="addColumn">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormAddColumn;
