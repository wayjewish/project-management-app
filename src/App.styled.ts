import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const AppBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  minHeight: '100vh',
});

export const Main = styled('main')(({ theme }) => ({
  flexGrow: '1',
  width: '100%',
  height: '100%',
  margin: `${theme.spacing(5)} 0px`,

  backgroundColor: 'white',

  [theme.breakpoints.down('md')]: {
    margin: `${theme.spacing(3)} 0px`,
  },
}));
