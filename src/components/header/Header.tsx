import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BurgerBox, FormSelect, Wrap } from './Header.styled';
import { indigo } from '@mui/material/colors';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Products', 'Pricing', 'Blog'];

function HeaderComponent() {
  const [lang, setLang] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography component="h1" variant="h5" color={'white'}>
            RssTracker
          </Typography>
          <BurgerBox sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Button
                size="medium"
                color="inherit"
                variant="outlined"
                sx={{
                  borderColor: { xs: `${indigo['A200']}`, md: 'white' },
                  color: { xs: `${indigo['A200']}`, md: 'white' },
                }}
                onClick={handleCloseNavMenu}
              >
                Login
              </Button>
              <FormSelect size="small">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: { xs: `${indigo['A200']}`, md: 'white' } }}
                >
                  Language
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={lang}
                  label="Language"
                  onChange={handleChange}
                  sx={{ color: { xs: `${indigo['A200']}`, md: 'white' } }}
                >
                  <MenuItem value={10} onClick={handleCloseNavMenu}>
                    RU
                  </MenuItem>
                  <MenuItem value={20} onClick={handleCloseNavMenu}>
                    EN
                  </MenuItem>
                </Select>
              </FormSelect>
            </Menu>
          </BurgerBox>
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}
          >
            <Box display={'flex'} gap={3}>
              <Button
                size="medium"
                color="inherit"
                variant="outlined"
                sx={{ borderColor: 'white', color: 'white' }}
              >
                Login
              </Button>
              <FormSelect size="small">
                <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>
                  Language
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={lang}
                  label="Language"
                  onChange={handleChange}
                  sx={{ color: 'white' }}
                >
                  <MenuItem value={10}>RU</MenuItem>
                  <MenuItem value={20}>EN</MenuItem>
                </Select>
              </FormSelect>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderComponent;
