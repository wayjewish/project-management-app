import React from 'react';
import { Global } from '@emotion/react';
import { Box } from '@mui/material';

import Header from './components/header/Header';
import { Main } from './App.styled';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import { GlobalStyles } from './Global.styled';

function App() {
  return (
    <Box>
      <Global styles={GlobalStyles} />
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </Box>
  );
}
export default App;
