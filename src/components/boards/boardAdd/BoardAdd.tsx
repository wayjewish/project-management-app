import React from 'react';
import { Typography } from '@mui/material';
import { CardAdd, CardAddContent, IconBoardAdd } from './BoardAdd.styled';

import { useAppDispatch } from '../../../store/hooks';
import { changeIsOpenModalBoards } from '../../../store/features/boardsSlice';

import { useTranslation } from 'react-i18next';

function BoardAdd() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handlerClick = () => {
    dispatch(changeIsOpenModalBoards({ formAdd: true }));
  };

  return (
    <CardAdd variant="elevation" elevation={8} onClick={handlerClick}>
      <CardAddContent>
        <Typography variant="h5">{t('button.add')}</Typography>
        <IconBoardAdd />
      </CardAddContent>
    </CardAdd>
  );
}

export default BoardAdd;
