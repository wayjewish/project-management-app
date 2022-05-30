import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, useScrollTrigger, Typography, Button, Container } from '@mui/material';

import { Header, HeaderWrap, BoxBtns } from './Header.styled';
import SelectBox from './selectLang/SelectBox';
import MobileMenu from './mobileMenu/MobileMenu';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { change } from '../../store/features/authSlice';

function HeaderComponent() {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 });

  useEffect(() => {
    console.log(`isAuth=${isAuth}`);
  }, [isAuth]);

  function handleClickLogin() {
    dispatch(change(!isAuth));
  }

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
            {isAuth ? (
              <Button color="inherit" onClick={handleClickLogin}>
                Login
              </Button>
            ) : (
              <>
                <Button color="inherit" onClick={() => {}}>
                  EDIT PROFILE
                </Button>
                <Button color="inherit" onClick={handleClickLogin}>
                  Logout
                </Button>
              </>
            )}

            <SelectBox media="desctop" />
          </BoxBtns>
          <MobileMenu />
        </HeaderWrap>
      </Container>
    </Header>
  );
}

export default HeaderComponent;
