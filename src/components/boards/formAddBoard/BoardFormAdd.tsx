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
import { IBoardData } from '../../../types';

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

  const handleChange = (fieldName: string, value: string) => {
    setData({
      ...data,
      [fieldName]: value,
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
              label="Title"
              variant="outlined"
              onChange={(e) => handleChange('title', e.currentTarget.value)}
            />
            <TextField
              label="Description"
              multiline
              rows={4}
              onChange={(e) => handleChange('description', e.currentTarget.value)}
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
