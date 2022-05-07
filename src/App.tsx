import React from 'react';
import styled from '@emotion/styled';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Container from '@mui/material/Container';
import { GlobalStyles } from './Global.styled'
import { Global } from "@emotion/react";


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
