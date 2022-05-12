import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import { GlobalStyles } from './Global.styled';
import { Global } from '@emotion/react';

function App() {
  return (
    <div data-testid="app">
      <Global styles={GlobalStyles} />
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}
export default App;
