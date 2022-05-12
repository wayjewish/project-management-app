import React from 'react';
import { CardItemAdd, CancelOutlinedBoardAdd } from './BoardAdd.styled';
import { Typography, Grid } from '@mui/material';

function BoardAdd() {
  return (
    <Grid item xs={1} sm={1} md={1}>
      <CardItemAdd variant="elevation" elevation={8}>
        <Typography variant="h5">Добавить</Typography>
        <CancelOutlinedBoardAdd />
      </CardItemAdd>
    </Grid>
  );
}

export default BoardAdd;
