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
  const location = useLocation();
  const pathname = location.pathname as string;

  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 });

  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);

  const signOut = () => {
    dispatch(setIsAuth(false));
    dispatch(setToken(null));
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
            {isAuth && pathname === '/' && (
              <Button color="inherit" component={Link} to="/boards">
                {t('header.mainPage')}
              </Button>
            )}
            {isAuth && pathname !== '/' && (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/editprofile"
                  state={{ backgroundLocation: location }}
                >
                  {t('header.editProfile')}
                </Button>
                <Button color="inherit" component={Link} to="/" onClick={signOut}>
                  {t('header.signout')}
                </Button>
              </>
            )}
            {!isAuth && (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/signin"
                  state={{ backgroundLocation: location }}
                >
                  {t('header.signin')}
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/signup"
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
