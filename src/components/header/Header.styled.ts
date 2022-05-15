import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import { AppBar, AppBarProps, Box, BoxProps } from '@mui/material';

interface StyledAppBarProps extends AppBarProps {
  scrollTrigger?: boolean;
}

interface StyledBoxProps extends BoxProps {
  scrollTrigger?: boolean;
}

export const Header = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrollTrigger',
})<StyledAppBarProps>(({ scrollTrigger, theme }) => ({
  backgroundColor: `${indigo['A200']}`,
  transition: theme.transitions.create(['background-color']),

  ...(scrollTrigger && {
    backgroundColor: `${indigo['A400']}`,
  }),
}));

export const HeaderWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'scrollTrigger',
})<StyledBoxProps>(({ scrollTrigger, theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${theme.spacing(2.5)} 0px`,
  transition: theme.transitions.create(['padding']),

  ...(scrollTrigger && {
    padding: `${theme.spacing(1)} 0px`,
  }),
}));

export const BoxBtns = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
