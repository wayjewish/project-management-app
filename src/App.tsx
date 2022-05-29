import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalStyles } from './Global.styled';
import { AppBox, Main } from './App.styled';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import PrivateRoute from './components/privateRoute/PrivateRouter';
import HomePage from './pages/home/HomePage';
import BoardsPage from './pages/boards/BoardsPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import BoardPage from './pages/board/BoardPage';

import Errors from './components/errors/Errors';

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
          <Route
            path="/boards/:boardId"
            element={
              <PrivateRoute>
                <BoardPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
      <Footer />

      <Errors />
    </AppBox>
  );
}

export default App;
