import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import { AppBar, Box, Container, FormControl } from '@mui/material';

export const Header = styled(AppBar)({
  background: `${indigo['A200']}`,
  boxShadow: '0',
});

export const Wrap = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
});

export const BoxBtn = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  justifyContent: 'flex-end',

  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));
