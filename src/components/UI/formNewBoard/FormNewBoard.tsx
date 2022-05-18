import React, { useState } from 'react';
import { BoxFormNewBoard, FormInput, ButtonInput, BoxTitle } from './FormNewBoard.styled';
import { Container, Dialog, DialogTitle, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../../store/hooks';
import { addBoard } from '../../../features/BoardSlice/BoardSlice';

interface IFormNewBoard {
  reuseDelete: () => void;
}

export default function FormNewBoard({ reuseDelete }: IFormNewBoard) {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(true);
  const [valueTitle, setValueTitle] = useState('');
  const [valueDescription, setValueDescription] = useState('');

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueTitle(event.target.value);
  };
  const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueDescription(event.target.value);
  };

  const handleClose = () => {
    reuseDelete();
    setOpen(false);
  };

  const createNewBoard = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(valueTitle);
    console.log(valueDescription);
    dispatch(addBoard());

    handleClose();
  };

  return (
    <Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <BoxTitle>
          <DialogTitle id="alert-dialog-title">{'Create board'}</DialogTitle>
          <CloseIcon cursor="pointer" onClick={handleClose} />
        </BoxTitle>
        <Box
          component="form"
          onSubmit={(event: React.SyntheticEvent) => {
            createNewBoard(event);
          }}
          noValidate
          autoComplete="off"
        >
          <BoxFormNewBoard>
            <FormInput
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={handleChangeTitle}
            />
            <FormInput
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              onChange={handleChangeDescription}
            />
            <ButtonInput variant="contained" type="submit">
              CREATE
            </ButtonInput>
          </BoxFormNewBoard>
        </Box>
      </Dialog>
    </Container>
  );
}
