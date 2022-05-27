import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, useScrollTrigger, Typography, Button, Container } from '@mui/material';

import { Header, HeaderWrap, BoxBtns } from './Header.styled';
import SelectBox from './selectLang/SelectBox';
import MobileMenu from './mobileMenu/MobileMenu';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { change, IAuthState } from '../../store/features/auth/authSlice';
import UserService from '../../store/features/user/user.service';
import { getToken } from '../../store/features/user/userSlice';

function HeaderComponent() {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 });

  useEffect(() => {
    console.log(`isAuth=${isAuth}`);
  }, [isAuth]);

  function handleClickLogin() {
    dispatch(change(!isAuth));
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OWQzMTczMy03NTE0LTQ0MzQtYTNjZC0xZjUxMTIyOTMyZWMiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjUzMDYwMDk3fQ.vzS0nBjU0jbODVxpzj0Ka3KSLGs7OXw94yEDwscYZkQ';
    dispatch(getToken());
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
                <Button
                  color="inherit"
                  onClick={() => {
                    console.log('Edit Profile');
                  }}
                >
                  Edit Profile
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
