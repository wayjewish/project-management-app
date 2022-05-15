import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

import { GlobalStyles } from './Global.styled';
import Header from './components/header/Header';
import { AppBox, Main } from './App.styled';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <AppBox>
      <Global styles={GlobalStyles} />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
    </AppBox>
  );
}
export default App;
