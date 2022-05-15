import { styled } from '@mui/material/styles';

export const Main = styled('main')(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: `${theme.spacing(5)} 0px`,

  backgroundColor: 'white',

  [theme.breakpoints.down('md')]: {
    margin: `${theme.spacing(3)} 0px`,
  },
}));
