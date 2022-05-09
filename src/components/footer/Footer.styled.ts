import style from '@emotion/styled';
import { styled } from '@mui/material/styles';


export const Footer = style.footer`
  width: 100%;
  height: 100%;
  background: #4169e1;
`;

export const Wrap = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1%;
  flex-wrap: wrap;
`;

export const LogoRss = style.img`
  width: 100%;
  height: 100%;
`;

export const Links = style.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 75%;
  line-height: 166%;
  letter-spacing: 0.4px;
  color: #ffffff;
`;

export const Container =styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
    [theme.breakpoints.down('md')]: {
        width: '55%',
      },
    [theme.breakpoints.up('lg')]: {
        width: '30%',
    },
    [theme.breakpoints.up('xl')]: {
        width: '20%'
    },
  })); 
