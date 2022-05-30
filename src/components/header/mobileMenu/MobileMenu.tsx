import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton, Drawer, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { BurgerBox, DrawerBox } from './MobileMenu.styled';
import SelectBox from '../selectLang/SelectBox';

function BurgerMenu() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const setOpen = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <BurgerBox>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={setOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={isOpen} onClose={setOpen(false)}>
        <DrawerBox role="presentation">
          <Button
            variant="text"
            startIcon={<CloseIcon />}
            onClick={setOpen(false)}
            fullWidth={false}
          >
            Close
          </Button>
          <Button
            variant="outlined"
            fullWidth={true}
            component={Link}
            to="/singup"
            state={{ backgroundLocation: location }}
            onClick={setOpen(false)}
          >
            Sing In
          </Button>
          <Button
            variant="outlined"
            fullWidth={true}
            component={Link}
            to="/singup"
            state={{ backgroundLocation: location }}
            onClick={setOpen(false)}
          >
            Sing Up
          </Button>
          <SelectBox media="mobile" />
        </DrawerBox>
      </Drawer>
    </BurgerBox>
  );
}
export default BurgerMenu;
