import style from '@emotion/styled';
import { styled } from '@mui/material/styles';
import * as palette from '../../Variables';
import { indigo } from '@mui/material/colors';



export const Footer = style.footer`
  width: 100%;
  height: 100%;
  background: ${indigo['A200']};
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
  alignItems: 'center',
  gap: '92px',
  [theme.breakpoints.down('sm')]: {
    gap: '0px',
  },
}));

export const Divider = style.hr`
  border: 1px solid rgba(255, 255, 255, 0.12);
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%
`;
