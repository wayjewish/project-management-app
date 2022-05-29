import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, useScrollTrigger, Typography, Button, Container } from '@mui/material';

import { Header, HeaderWrap, BoxBtns } from './Header.styled';
import SelectBox from './selectLang/SelectBox';
import MobileMenu from './mobileMenu/MobileMenu';

function HeaderComponent() {
  const location = useLocation();
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
          <BoxBtns>
            <Button
              color="inherit"
              component={Link}
              to="/singin"
              state={{ backgroundLocation: location }}
            >
              Sing In
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/singup"
              state={{ backgroundLocation: location }}
            >
              Sing Up
            </Button>
            <SelectBox media="desctop" />
          </BoxBtns>
          <MobileMenu />
        </HeaderWrap>
      </Container>
    </Header>
  );
}

export default HeaderComponent;
