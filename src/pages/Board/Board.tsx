import React from 'react';
import { TypographyBoardTitle } from './Board.styled';
import { Container, Grid, Box } from '@mui/material';
import BoardItem from './BoardItem/BoardItem';
import BoardAdd from './BoardAdd/BoardAdd';

const boardItemAmount = [1, 2, 3, 4, 5];

function Board() {
  return (
    <Container>
      <TypographyBoardTitle variant="h3">Boards</TypographyBoardTitle>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 2, md: 3 }}>
        {boardItemAmount.map((el) => {
          return <BoardItem key={el + Math.random()} />;
        })}
        <BoardAdd />
      </Grid>
    </Container>
  );
}

export default Board;
