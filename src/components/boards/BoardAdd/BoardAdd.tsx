import React from 'react';
import { Typography, Grid } from '@mui/material';
import { CardItemAdd, CancelOutlinedBoardAdd } from './BoardAdd.styled';

interface IProps {
  openModalFormAddBoard: () => void;
}

function BoardAdd({ openModalFormAddBoard }: IProps) {
  return (
    <Grid item xs={1} sm={1} md={1}>
      <CardItemAdd variant="elevation" elevation={8} onClick={openModalFormAddBoard}>
        <Typography variant="h5">Добавить</Typography>
        <CancelOutlinedBoardAdd />
      </CardItemAdd>
    </Grid>
  );
}

export default BoardAdd;
