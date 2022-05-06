import React from 'react';
import styled from '@emotion/styled';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import { Global, css } from '@emotion/react';
import Container from '@mui/material/Container';
import { Breadcrumbs } from '@mui/material';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const GlobalStyles = css`
  body {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <Container maxWidth={'xl'} style={{padding:0}}>
      <Global styles={GlobalStyles} />
      <Header />
      <Landing />
      <Footer />
    </Container>
  );
}

export default App;
