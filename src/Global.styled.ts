import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const GlobalStyles = css`
  * {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    width: 100%;
    height: inherit;
    margin: 0 auto;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    transition: 0.2s;
  }
  a:hover {
    cursor: pointer;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`;

export const PageContentWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));
