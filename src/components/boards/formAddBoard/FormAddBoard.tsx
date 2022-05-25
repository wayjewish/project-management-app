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
import { CloseIconBox, FormInputsBox } from './FormAddBoard.styled';
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

  const [value, setValue] = useState<IBoardData>({
    title: '',
    description: '',
  });

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      title: e.currentTarget.value,
    });
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      description: e.currentTarget.value,
    });
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addBoard(value));
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
            <TextField label="Title" variant="outlined" onChange={handleChangeTitle} />
            <TextField label="Description" multiline rows={4} onChange={handleChangeDescription} />
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
