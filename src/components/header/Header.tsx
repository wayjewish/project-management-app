import React from 'react';
import { Box, useScrollTrigger, Typography, Button, Container } from '@mui/material';

import { Header, HeaderWrap, BoxBtns } from './Header.styled';
import SelectBox from './selectLang/SelectBox';
import BurgerMenu from './mobileMenu/mobileMenu';

function HeaderComponent() {
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 });

  return (
    <Header position="sticky" scrollTrigger={scrollTrigger} elevation={scrollTrigger ? 8 : 0}>
      <Container>
        <HeaderWrap scrollTrigger={scrollTrigger}>
          <Box>
            <Typography component="div" variant="h5" color="white">
              RSS Tracker
            </Typography>
          </Box>
          <BoxBtns>
            <Button color="inherit">Login</Button>
            <SelectBox media="desctop" />
          </BoxBtns>
          <BurgerMenu />
        </HeaderWrap>
      </Container>
    </Header>
  );
}

export default HeaderComponent;
