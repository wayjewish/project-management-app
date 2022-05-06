import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { AppBar, Toolbar, Box } from '@mui/material';
import LangBtn from './LangugeBtn'

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  color: #4169e1;
  border-radius: 50%;
  border: 1px solid #4169e1;
  position: absolute;
  top: 0.5rem;
  left: 5.7rem;
  background-color: #4169e1;
  z-index: 1;
`;


function HeaderComponent() {
  

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar sx={{ bgcolor: '#F2F2FD', boxShadow: 'none', position:'fixied', overflowY:"scroll"}}>
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
            sx={{ bgcolor: '#F2F2FD', color: '#000000', mr: 2 }}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            color="inherit"
            size="small"
            sx={{ bgcolor: '#F2F2FD', color: '#000000' }}
          >
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderComponent;
