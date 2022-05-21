import React from 'react';
import { Container, Typography } from '@mui/material';
import { PageContentWrap } from '../../Global.styled';

import Boards from '../../components/boards/Boards';

function Board() {
  return (
    <Container>
      <PageContentWrap>
        <Typography
          component="h1"
          sx={{
            typography: { sm: 'h2', xs: 'h3' },
          }}
        >
          Boards
        </Typography>
        <Boards />
      </PageContentWrap>
    </Container>
  );
}

export default Board;
