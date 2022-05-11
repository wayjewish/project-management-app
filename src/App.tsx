import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import { GlobalStyles } from './Global.styled';
import { Global } from '@emotion/react';
import { Box } from '@mui/material';

function App() {
  return (
    <Box component="main" style={{width:'100%', height:'100%', backgroundColor:'white'}}>
      <Global styles={GlobalStyles} />
      <Header />
      <Landing />
      <Footer />
    </Box>
  );
}
export default App;
