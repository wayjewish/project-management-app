import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import { indigo } from '@mui/material/colors';

export const Footer = styled('footer')({
  width: '100%',
  height: '100%',
  background: `${indigo['A200']}`,
  padding: '10px 20px',
});

export const LogoRss = styled('img')({
  width: '100px',
  height: '36px',
});

export const Bot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '50px',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
  },
}));

export const FooterDivider = styled(Divider)({
  marginTop: '10px',
  marginBottom: '10px',
  borderColor: 'rgba(255, 255, 255, 0.12)',
});
