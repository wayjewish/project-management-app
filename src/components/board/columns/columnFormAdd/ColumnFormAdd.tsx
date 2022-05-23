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
import { CloseIconBox, FormInputsBox } from './ColumnFormAdd.styled';
import CloseIcon from '@mui/icons-material/Close';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { IColumnData } from '../../../../api/types';
import { addColumn } from '../../../../store/features/board/boardSlice';

interface IProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function FormAddColumn({ openModal, setOpenModal }: IProps) {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.board);

  const [data, setData] = useState<IColumnData>({
    title: '',
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
    if (board) {
      dispatch(addColumn({ boardId: board.id, data }));
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
              id="title"
              label="Title"
              variant="outlined"
              value={data.title}
              onChange={handleChange}
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
