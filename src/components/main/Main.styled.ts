import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HomeImage = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '0px',
  },
}));

export const BoxVideo = styled(Box)({
  border: '1px solid #000000',
  borderRadius: '10px',
  width: '100%',
  height: '335px',
});
