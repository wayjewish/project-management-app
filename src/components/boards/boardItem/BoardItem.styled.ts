import { styled } from '@mui/material/styles';
import { Card, CardContent, Box } from '@mui/material';

export const CardItem = styled(Card)(({ theme }) => ({
  height: '200px',

  [theme.breakpoints.down('md')]: {
    height: 'auto',
  },
}));

export const CardItemContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  height: '100%',
}));

export const CardItemTop = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const CardItemBot = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
}));
