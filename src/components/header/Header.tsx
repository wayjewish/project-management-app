import React from 'react';
import { Link } from 'react-router-dom';
import { Box, useScrollTrigger, Typography, Button, Container } from '@mui/material';

import { Header, HeaderWrap, BoxBtns } from './Header.styled';
import SelectBox from './selectLang/SelectBox';
import BurgerMenu from './mobileMenu/mobileMenu';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { openModalLogin } from '../../store/features/modalLogin/modalLoginSlice';
import ModalLogin from '../Modal/ModalLogin';
import ModalSingup from '../Modal/ModalSingup';

function HeaderComponent() {
  const { isOpenedLogin } = useAppSelector((state) => state.modalLogin);
  const dispatch = useAppDispatch();
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
            <Button color="inherit" onClick={() => dispatch(openModalLogin())}>
              Login
            </Button>
            <ModalLogin />
            <ModalSingup />
            <SelectBox media="desctop" />
          </BoxBtns>
          <BurgerMenu />
        </HeaderWrap>
      </Container>
    </Header>
  );
}

export default HeaderComponent;
