import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import { GlobalStyles } from './Global.styled';
import { Global } from '@emotion/react';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <Global styles={GlobalStyles} />
      <Header />
      <Home />
      <Footer />
    </Box>
  );
}
export default App;
