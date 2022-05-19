import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import Board from './pages/Board/Board';
import { GlobalStyles } from './Global.styled';
import { AppBox, Main } from './App.styled';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/home/HomePage';
import BoardsPage from './pages/boards/BoardsPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
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
                <Board />
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
