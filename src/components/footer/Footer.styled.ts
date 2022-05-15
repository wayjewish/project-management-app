import { styled } from '@mui/material/styles';
import { Box, Divider } from '@mui/material';
import { indigo } from '@mui/material/colors';

export const Footer = styled('footer')({
  background: `${indigo['A200']}`,
});

export const FooterWrap = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2.5)} 0px`,
}));

export const LogoRss = styled('img')({
  width: '100px',
  height: '36px',
});

export const CenterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'flex-start',
  },
}));

export const BotBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(6),

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
  },
}));

export const FooterDivider = styled(Divider)(({ theme }) => ({
  margin: `${theme.spacing(1)} 0`,
  borderColor: 'rgba(255, 255, 255, 0.12)',
}));
