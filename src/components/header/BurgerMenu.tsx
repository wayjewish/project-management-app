import React from 'react';
import { IconButton, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BurgerBox, MenuBar } from './BurgerMenu.styled';
import Login from '../Login/LoginBtn';
import SelectBox from '../selectLang/SelectBox';

function BurgerMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <BurgerBox>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <MenuBar
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        <MenuItem>
          <Login />
        </MenuItem>
        <MenuItem>
          <SelectBox />
        </MenuItem>
      </MenuBar>
    </BurgerBox>
  );
}
export default BurgerMenu;
