import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const BurgerBox = styled(Box)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

export const DrawerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  width: '250px',
  padding: theme.spacing(2),
}));
