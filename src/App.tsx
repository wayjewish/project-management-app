import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './Global.styled';
import { Global } from '@emotion/react';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <Global styles={GlobalStyles} />
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}
export default App;
