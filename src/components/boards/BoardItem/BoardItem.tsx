import React from 'react';
import { Button, Typography } from '@mui/material';
import { CardItem, CardItemContent, CardItemTop, CardItemBot } from './BoardItem.styled';
import { IBoard } from '../../../types';

interface IProps {
  board: IBoard;
  removeBoard: (board: IBoard) => void;
}

function BoardItem({ board, removeBoard }: IProps) {
  const handlerClick = () => {
    removeBoard(board);
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
