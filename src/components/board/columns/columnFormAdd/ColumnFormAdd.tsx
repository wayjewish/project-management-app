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
import { CloseIconBox, FormInputsBox } from './ColumnFormAdd.styled';
import CloseIcon from '@mui/icons-material/Close';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { IColumnData } from '../../../../api/types';
import { addColumn, changeIsOpenModalColumn } from '../../../../store/features/board/boardSlice';

function ColumnFormAdd() {
  const dispatch = useAppDispatch();
  const { board, isOpenModalColumn } = useAppSelector((state) => state.board);

  const initialData: IColumnData = {
    title: '',
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
    dispatch(changeIsOpenModalColumn({ formAdd: false }));
    setData(initialData);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (board) {
      dispatch(addColumn({ boardId: board.id, data }));
    }
    handleClose();
  };

  return ReactDOM.createPortal(
    <Dialog fullWidth maxWidth="sm" open={isOpenModalColumn.formAdd} onClose={handleClose}>
      <CloseIconBox>
        <CloseIcon cursor="pointer" onClick={handleClose} />
      </CloseIconBox>
      <DialogTitle variant="h5">Create column</DialogTitle>
      <DialogContent>
        <Box id="addColumn" component="form" onSubmit={handlerSubmit} autoComplete="off">
          <FormInputsBox>
            <TextField
              name="title"
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
    </Dialog>,
    document.body
  );
}

export default ColumnFormAdd;
