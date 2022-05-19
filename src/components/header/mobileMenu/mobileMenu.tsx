import React, { useState } from 'react';
import { IconButton, Drawer, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { BurgerBox, DrawerBox } from './mobileMenu.styled';
import SelectBox from '../selectLang/SelectBox';
import { openModalLogin } from '../../../store/features/modalLogin/modalLoginSlice';
import ModalLogin from '../../Modal/ModalLogin';
import ModalSingup from '../../Modal/ModalSingup';
import { useAppDispatch } from '../../../store/hooks';

function BurgerMenu() {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <BurgerBox>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <DrawerBox role="presentation">
          <Button
            variant="text"
            startIcon={<CloseIcon />}
            onClick={toggleDrawer(false)}
            fullWidth={false}
          >
            Close
          </Button>
          <Button variant="outlined" fullWidth={true} onClick={() => dispatch(openModalLogin())}>
            Login
          </Button>
          <ModalLogin />
          <ModalSingup />
          <SelectBox media="mobile" />
        </DrawerBox>
      </Drawer>
    </BurgerBox>
  );
}
export default BurgerMenu;
