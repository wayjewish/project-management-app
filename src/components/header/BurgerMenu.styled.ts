import { styled } from '@mui/material/styles';
import { Box, Menu } from '@mui/material';

export const BurgerBox = styled(Box)(({ theme }) => ({
  flexGrow: '1',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('xs')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const MenuBar = styled(Menu)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
