import { Box, Card, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HomeWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const FirstBox = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const FirstLeftBox = styled(Grid)({});

export const FirstRightBox = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const HomeImage = styled('img')({
  width: '100%',
});

export const AdvanGridItem = styled(Grid)({
  display: 'flex',
});

export const AdvanCard = styled(Card)({
  width: '100%',
  height: '100%',
});

export const BoxVideo = styled(Box)({
  width: '100%',
  height: '335px',

  border: '1px solid #000000',
  borderRadius: '10px',
});
