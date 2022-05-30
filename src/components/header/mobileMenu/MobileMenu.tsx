import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton, Drawer, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { BurgerBox, DrawerBox } from './MobileMenu.styled';
import SelectBox from '../selectLang/SelectBox';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setIsAuth, setToken } from '../../../store/features/authSlice';

import { useTranslation } from 'react-i18next';

function BurgerMenu() {
  const location = useLocation();
  const { t } = useTranslation();
  const pathname = location.pathname as string;

  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);

  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const signOut = () => {
    close();
    dispatch(setIsAuth(false));
    dispatch(setToken(null));
  };

  return (
    <BurgerBox>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={open}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={isOpen} onClose={close}>
        <DrawerBox role="presentation">
          <Button variant="text" startIcon={<CloseIcon />} onClick={close} fullWidth={false}>
            {t('button.close')}
          </Button>

          {isAuth && pathname === '/' && (
            <Button
              variant="outlined"
              fullWidth={true}
              component={Link}
              to="/boards"
              onClick={close}
            >
              {t('header.mainPage')}
            </Button>
          )}
          {isAuth && pathname !== '/' && (
            <Button
              variant="outlined"
              fullWidth={true}
              component={Link}
              to="/editprofile"
              state={{ backgroundLocation: location }}
              onClick={close}
            >
              {t('header.editProfile')}
            </Button>
          )}
          {isAuth && (
            <Button variant="outlined" fullWidth={true} component={Link} to="/" onClick={signOut}>
              {t('header.signout')}
            </Button>
          )}
          {!isAuth && (
            <>
              <Button
                variant="outlined"
                fullWidth={true}
                component={Link}
                to="/signin"
                state={{ backgroundLocation: location }}
                onClick={close}
              >
                {t('header.signin')}
              </Button>
              <Button
                variant="outlined"
                fullWidth={true}
                component={Link}
                to="/signup"
                state={{ backgroundLocation: location }}
                onClick={close}
              >
                {t('header.signup')}
              </Button>
            </>
          )}
          <SelectBox media="mobile" />
        </DrawerBox>
      </Drawer>
    </BurgerBox>
  );
}
export default BurgerMenu;
