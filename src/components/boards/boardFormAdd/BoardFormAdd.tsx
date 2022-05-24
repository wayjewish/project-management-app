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
import { CloseIconBox, FormInputsBox } from './BoardFormAdd.styled';
import CloseIcon from '@mui/icons-material/Close';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addBoard, changeIsOpenModalBoards } from '../../../store/features/boards/boardsSlice';
import { IBoardData } from '../../../api/types';

export default function BoardFormAdd() {
  const dispatch = useAppDispatch();
  const { isOpenModalBoards } = useAppSelector((state) => state.boards);

  const initialData: IBoardData = {
    title: '',
    description: '',
  };

  const [data, setData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClose = () => {
    dispatch(changeIsOpenModalBoards({ formAdd: false }));
    setData(initialData);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addBoard({ data }));
    handleClose();
  };

  return ReactDOM.createPortal(
    <Dialog fullWidth maxWidth="sm" open={isOpenModalBoards.formAdd} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">Create board</DialogTitle>
      <DialogContent>
        <Box id="addBoard" component="form" onSubmit={handlerSubmit} autoComplete="off">
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
              multiline
              rows={4}
              value={data.description}
              onChange={handleChange}
            />
          </FormInputsBox>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" type="submit" form="addBoard">
          Create
        </Button>
      </DialogActions>
    </Dialog>,
    document.body
  );
}
