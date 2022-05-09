import { css } from '@emotion/react';

export const GlobalStyles = css`
  * {
    margin: 0;
    border: 0;
    padding: 0;
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
