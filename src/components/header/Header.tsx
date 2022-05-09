import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, Box } from '@mui/material';
import LangBtn from './LangugeBtn';
import { Circle } from './Header.styled';

function HeaderComponent() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar
        sx={{ bgcolor: '#F2F2FD', boxShadow: 'none', position: 'fixied', overflowY: 'scroll' }}>
        <Toolbar variant="regular" style={{ minHeight: '64px', paddingLeft: '24px' }}>
          <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
            <span style={{ color: '#000000' }}>
              Tracker
              <span style={{ color: '#FFFFFF', zIndex: '2', position: 'relative' }}>Rss</span>
            </span>
            <Circle></Circle>
          </Typography>
          <LangBtn />
          <Button
            variant="contained"
            color="inherit"
            size="small"
            sx={{ bgcolor: '#F2F2FD', color: '#000000', mr: 2 }}>
            Log in
          </Button>
          <Button
            variant="contained"
            color="inherit"
            size="small"
            sx={{ bgcolor: '#F2F2FD', color: '#000000' }}>
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderComponent;
