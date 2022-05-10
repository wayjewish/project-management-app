import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Main = styled('main')({
  width: '100%',
  height: '100%',
  background: 'white',
});

export const Wrap = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '30px 0px',

  [theme.breakpoints.up('xs')]: {
    padding: '0px 14px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0px 25px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '0px 120px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '0px 360px',
  },
}));

export const Content = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '20px',
}));
export const Image = styled('img')(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        width: '0px',
        height: '0px',
      },
    [theme.breakpoints.up('md')]: {
        width: '290px',
        height: '154px',
      },
  [theme.breakpoints.up('lg')]: {
    width: '472px',
    height: '242px',
  },
}));
export const Item = styled(Paper)({
  textAlign: 'left',
  background: 'white',
  boxShadow:
    '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
  borderRadius: '4px',
  padding: '16px',
});
