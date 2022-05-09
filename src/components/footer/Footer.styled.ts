import style from '@emotion/styled';
import { styled } from '@mui/material/styles';
import * as palette from '../../Variables';

export const Footer = style.footer`
  width: '100%',
  height: '100%',
  background: ${palette.COLOR_BACKGROUND},
`;

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
  height: 36px;
  width: 100px;
`;

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '92px',
  [theme.breakpoints.down('sm')]: {
    gap: '0px',
  },
}));

export const Divider = styled('hr')(({ theme }) => ({
  border: '1px solid rgba(255, 255, 255, 0.12)',
  marginTop: '10px',
  marginBottom: '10px',
  width: '100%',
}));
