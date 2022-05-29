import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalStyles } from './Global.styled';
import { AppBox, Main } from './App.styled';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';

import PrivateRoute from './components/privateRoute/PrivateRouter';
import HomePage from './pages/home/HomePage';
import BoardsPage from './pages/boards/BoardsPage';
import BoardPage from './pages/board/BoardPage';
import NotFoundPage from './pages/notFound/NotFoundPage';

interface ILocationState {
  background?: Location;
}

function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <AppBox>
      <Global styles={GlobalStyles} />
      <Header />
      <Main>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/singin" element={<SignIn />} />
          <Route path="/singup" element={<SignUp />} />

          <Route
            path="/boards"
            element={
              <PrivateRoute>
                <BoardsPage />
              </PrivateRoute>
            }
          />
          <Route path="/boards/:boardId" element={<BoardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {state?.backgroundLocation && (
          <Routes>
            <Route path="/singin" element={<SignIn />} />
            <Route path="/singup" element={<SignUp />} />
          </Routes>
        )}
      </Main>
      <Footer />
    </AppBox>
  );
}

export default App;
