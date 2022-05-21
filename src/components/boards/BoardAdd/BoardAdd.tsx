import React from 'react';
import { Typography } from '@mui/material';
import { CardAdd, CardAddContent, IconBoardAdd } from './BoardAdd.styled';

interface IProps {
  openModalFormAddBoard: () => void;
}

function BoardAdd({ openModalFormAddBoard }: IProps) {
  return (
    <CardAdd variant="elevation" elevation={8} onClick={openModalFormAddBoard}>
      <CardAddContent>
        <Typography variant="h5">Добавить</Typography>
        <IconBoardAdd />
      </CardAddContent>
    </CardAdd>
  );
}

export default BoardAdd;
