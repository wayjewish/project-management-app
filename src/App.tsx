import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

import { GlobalStyles } from './Global.styled';
import Header from './components/header/Header';
import { AppBox, Main } from './App.styled';
import Footer from './components/footer/Footer';

import HomePage from './pages/home/Home';
import BoardsPage from './pages/boards/Boards';
import NotFoundPage from './pages/notFound/NotFound';
import PrivateRoute from './components/privateRoute/PrivateRouter';

function App() {
  return (
    <AppBox>
      <Global styles={GlobalStyles} />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/boards"
            element={
              <PrivateRoute>
                <BoardsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
      <Footer />
    </AppBox>
  );
}
export default App;
