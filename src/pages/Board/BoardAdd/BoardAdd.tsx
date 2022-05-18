import React from 'react';
import { CardItemAdd, CancelOutlinedBoardAdd } from './BoardAdd.styled';
import { Typography, Grid } from '@mui/material';

interface IBoardAdd {
  openModalFormAddBoard: () => void;
}
function BoardAdd({ openModalFormAddBoard }: IBoardAdd) {
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
