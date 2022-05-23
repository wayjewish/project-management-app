import React, { useState } from 'react';
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

import { useAppDispatch } from '../../../store/hooks';
import { addBoard } from '../../../store/features/boards/boardsSlice';
import { IBoardData } from '../../../api/types';

interface IProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormAddBoard({ openModal, setOpenModal }: IProps) {
  const dispatch = useAppDispatch();

  const [data, setData] = useState<IBoardData>({
    title: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setData({
      ...data,
      [id]: value,
    });
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addBoard(data));
    handleClose();
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={openModal} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">Create board</DialogTitle>
      <DialogContent>
        <Box id="addBoard" component="form" onSubmit={handlerSubmit} autoComplete="off">
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
    </Dialog>
  );
}
