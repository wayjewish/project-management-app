import React from 'react';
import { Button, Typography } from '@mui/material';
import { CardItem, CardItemContent, CardItemTop, CardItemBot } from './BoardItem.styled';
import { IBoard } from '../../../api/types';

import { useAppDispatch } from '../../../store/hooks';
import {
  changeIsOpenModalBoards,
  setDeletedBoard,
} from '../../../store/features/boards/boardsSlice';

interface IProps {
  board: IBoard;
}

function BoardItem({ board }: IProps) {
  const dispatch = useAppDispatch();

  const handlerClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(setDeletedBoard(board));
    dispatch(changeIsOpenModalBoards({ confirmDelete: true }));
  };

  return (
    <CardItem variant="elevation" elevation={8}>
      <CardItemContent>
        <CardItemTop>
          <Typography variant="h5">{board.title}</Typography>
          <Typography variant="subtitle1">{board.description}</Typography>
        </CardItemTop>
        <CardItemBot>
          <Button variant="text" color="error" onClick={handlerClick}>
            Remove
          </Button>
        </CardItemBot>
      </CardItemContent>
    </CardItem>
  );
}

export default BoardItem;
