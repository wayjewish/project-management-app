import React from 'react';
import { indigo } from '@mui/material/colors';
import {
  Box,
  Container,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  useScrollTrigger,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BurgerBox, FormSelect, Header } from './Header.styled';

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
  const trigger = useScrollTrigger();
  return (
    <Header
      position="sticky"
      sx={{ bgcolor: `${indigo['A200']}` }}
      elevation={trigger ? 24 : 0}
      style={{
        backgroundColor: trigger ? `${indigo['A400']}` : `${indigo['A200']}`,
        height: trigger ? '100%' : '10%',
      }}
    >
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
              <MenuItem>
                <Button
                  size="medium"
                  color="inherit"
                  variant="outlined"
                  sx={{
                    borderColor: { xs: `${indigo['A200']}`, md: 'white' },
                    color: { xs: `${indigo['A200']}`, md: 'white' },
                    width: '100%',
                  }}
                  onClick={handleCloseNavMenu}
                >
                  Login
                </Button>
              </MenuItem>
              <MenuItem>
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
              </MenuItem>
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
    </Header>
  );
}

export default HeaderComponent;
