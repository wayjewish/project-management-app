import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, useScrollTrigger, Typography, Button, Container } from '@mui/material';

import { Header, HeaderWrap, BoxBtns } from './Header.styled';
import SelectBox from './selectLang/SelectBox';
import MobileMenu from './mobileMenu/MobileMenu';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setIsAuth, setToken } from '../../store/features/authSlice';

import { useTranslation } from 'react-i18next';

function HeaderComponent() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 });
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const exitUserProfile = () => {
    dispatch(setIsAuth(false));
    dispatch(setToken(null));
    localStorage.removeItem('token');
  };

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
              <>
                <Button color="inherit" component={Link} to="/editprofile">
                  EDIT PROFILE
                </Button>
                <Button color="inherit" component={Link} to="/" onClick={exitUserProfile}>
                  Sing Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/singin"
                  state={{ backgroundLocation: location }}
                >
                  {t('header.signin')}
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/singup"
                  state={{ backgroundLocation: location }}
                >
                  {t('header.signup')}
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
