import style from '@emotion/styled';
import { styled } from '@mui/material/styles';
import * as palette from '../../Variables';

export const Footer = styled('footer')(({ theme }) => ({
  width: '100%',
  height: '100%',
  background: `${palette.COLOR_BACKGROUND}`,
}));

export const Wrap = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
    padding: '10px 20px',
  },
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    padding: '10px 20px',
  },
  [theme.breakpoints.up('lg')]: {
    alignItems: 'center',
    padding: '10px',
  },
}));

export const LogoRss = style.img`
  height: 100%;
  width: 100%;
`;

export const Container = styled('div')(({ theme }) => ({
  width: '410px',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  [theme.breakpoints.down('sm')]: {
    width: '280px',
  },
  [theme.breakpoints.up('md')]: {
    width: '410px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '410px',
  },
}));

export const Divider = styled('hr')(({ theme }) => ({
  border: '1px solid rgba(255, 255, 255, 0.12)',
  marginTop: '10px',
  marginBottom: '10px',
  [theme.breakpoints.up('xs')]: {
    width: '280px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '335px',
  },
  [theme.breakpoints.up('md')]: {
    width: '768px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '1400px',
  },
}));
