import React from 'react';
import { Link } from 'react-router-dom';
import { Box, useScrollTrigger, Typography, Container } from '@mui/material';

import { Header, HeaderWrap } from './Header.styled';

function HeaderErrorComponent() {
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 });

  return (
    <Header position="sticky" scrollTrigger={scrollTrigger} elevation={scrollTrigger ? 8 : 0}>
      <Container>
        <HeaderWrap scrollTrigger={scrollTrigger}>
          <Box>
            <Typography variant="h5" color="white" component={Link} to="/">
              RSS Tracker
            </Typography>
          </Box>
        </HeaderWrap>
      </Container>
    </Header>
  );
}

export default HeaderErrorComponent;
