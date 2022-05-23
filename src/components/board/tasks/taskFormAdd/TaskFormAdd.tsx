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
import { CloseIconBox, FormInputsBox } from './TaskFormAdd.styled';
import CloseIcon from '@mui/icons-material/Close';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { IColumnData } from '../../../../types';
import { addTask } from '../../../../store/features/board/boardSlice';

interface IProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  columnId: string;
}

function FormAddColumn({ openModal, setOpenModal, columnId }: IProps) {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);

  const [data, setData] = useState<IColumnData>({
    title: '',
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
    if (board) {
      dispatch(addTask({ boardId: board.id, columnId, data }));
    }
    handleClose();
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={openModal} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">Create column</DialogTitle>
      <DialogContent>
        <Box id="addColumn" component="form" onSubmit={handlerSubmit} autoComplete="off">
          <FormInputsBox>
            <TextField
              label="Title"
              variant="outlined"
              onChange={(e) => handleChange('title', e.currentTarget.value)}
            />
          </FormInputsBox>
        </Box>
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
