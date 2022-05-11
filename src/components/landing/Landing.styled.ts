import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HomePage = styled('main')({
  width: '100%',
  height: '100%',
  background: 'white',
});

export const HomeImage = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '0px',
  },
}));

export const BoxCards = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  marginBottom: '30px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const BoxVideo = styled(Box)({
  border: '1px solid #000000',
  borderRadius: '10px',
  width: '100%',
  height: '335px',
});
