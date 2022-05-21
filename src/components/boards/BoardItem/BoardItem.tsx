import React from 'react';
import {
  CardItem,
  CardContentItem,
  TypographyCardItem,
  ButtonCardRemove,
} from './BoardItem.styled';
import { Typography, Grid } from '@mui/material';

interface IBoard {
  title: string;
  id: string;
  description: string;
}

interface IProps {
  board: IBoard;
  initModalWindow: (id: string, title: string) => void;
}

function BoardItem({ board, initModalWindow }: IProps) {
  return (
    <Grid item xs={1} sm={1} md={1}>
      <CardItem variant="elevation" elevation={8}>
        <CardContentItem>
          <Typography variant="h5">{board.title}</Typography>
          <TypographyCardItem variant="h6">{board.description}</TypographyCardItem>
          <ButtonCardRemove
            variant="text"
            color="error"
            onClick={() => {
              initModalWindow(board.id, board.title);
            }}
          >
            REMOVE
          </ButtonCardRemove>
        </CardContentItem>
      </CardItem>
    </Grid>
  );
}

export default BoardItem;
