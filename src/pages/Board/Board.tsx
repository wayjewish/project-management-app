import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BoardItem from './BoardItem/BoardItem';
import BoardAdd from './BoardAdd/BoardAdd';

const boardItemAmount = [1, 2, 3, 4, 5];

function Board() {
  return (
    <Box maxWidth={'953px'} flex={'1 1 auto'} padding={'0 30px'}>
      <Typography variant="h3" padding={'30px 0'}>
        Boards
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {boardItemAmount.map((el) => {
          return <BoardItem key={el + Math.random()} />;
        })}
        <BoardAdd />
      </Box>
    </Box>
  );
}

export default Board;
