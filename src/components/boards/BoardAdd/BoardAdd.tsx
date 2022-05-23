import React from 'react';
import { Typography } from '@mui/material';
import { CardAdd, CardAddContent, IconBoardAdd } from './BoardAdd.styled';

import { useAppDispatch } from '../../../store/hooks';
import { changeIsOpenModal } from '../../../store/features/boards/boardsSlice';

function BoardAdd() {
  const dispatch = useAppDispatch();

  const handlerClick = () => {
    dispatch(changeIsOpenModal({ formAdd: true }));
  };

  return (
    <CardAdd variant="elevation" elevation={8} onClick={handlerClick}>
      <CardAddContent>
        <Typography variant="h5">Добавить</Typography>
        <IconBoardAdd />
      </CardAddContent>
    </CardAdd>
  );
}

export default BoardAdd;
