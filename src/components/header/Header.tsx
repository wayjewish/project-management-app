import React from 'react';
import { indigo } from '@mui/material/colors';
import { Box, useScrollTrigger, Typography } from '@mui/material';

import { Header, Wrap, BoxBtn } from './Header.styled';
import Login from '../Login/LoginBtn';
import SelectBox from '../selectLang/SelectBox';
import BurgerMenu from './BurgerMenu';

function HeaderComponent() {
  const trigger = useScrollTrigger();
  return (
    <Header
      position="sticky"
      elevation={trigger ? 24 : 0}
      sx={{
        backgroundColor: trigger ? `${indigo['A400']}` : `${indigo['A200']}`,
        height: trigger ? '100%' : '10%',
      }}
    >
      <Wrap>
        <Box>
          <Typography component="h1" variant="h5" color={'white'}>
            RssTracker
          </Typography>
        </Box>
        <BurgerMenu />
        <BoxBtn>
          <Box display={'flex'} gap={3}>
            <Login />
            <SelectBox />
          </Box>
        </BoxBtn>
      </Wrap>
    </Header>
  );
}

export default HeaderComponent;
