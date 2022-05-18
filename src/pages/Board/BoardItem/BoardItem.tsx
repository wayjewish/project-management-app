import React from 'react';
import {
  CardItem,
  CardContentItem,
  TypographyCardItem,
  ButtonCardRemove,
} from './BoardItem.styled';
import { Typography, Grid } from '@mui/material';

interface IBoard {
  id: string;
  title: string;
  description: string;
  initModalWindow: (id: string, title: string) => void;
}

function BoardItem({ title, id, description, initModalWindow }: IBoard) {
  return (
    <Grid item xs={1} sm={1} md={1}>
      <CardItem variant="elevation" elevation={8}>
        <CardContentItem>
          <Typography variant="h5">{title}</Typography>
          <TypographyCardItem variant="h6">{description}</TypographyCardItem>
          <ButtonCardRemove
            variant="text"
            color="error"
            onClick={() => {
              initModalWindow(id, title);
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
