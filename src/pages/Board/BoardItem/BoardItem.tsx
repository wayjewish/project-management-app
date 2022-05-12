import React from 'react';
import {
  CardItem,
  CardContentItem,
  TypographyCardItem,
  ButtonCardRemove,
} from './BoardItem.styled';
import { Typography, Grid } from '@mui/material';

function BoardItem() {
  return (
    <Grid item xs={1} sm={1} md={1}>
      <CardItem variant="elevation" elevation={8}>
        <CardContentItem>
          <Typography variant="h5">Проект</Typography>
          <TypographyCardItem variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elitadipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elitadipisicing elit Lorem ipsum dolor sit amet
            consectetur adipisicing elitadipisicing elit
          </TypographyCardItem>
          <ButtonCardRemove variant="text" color="error">
            REMOVE
          </ButtonCardRemove>
        </CardContentItem>
      </CardItem>
    </Grid>
  );
}

export default BoardItem;
