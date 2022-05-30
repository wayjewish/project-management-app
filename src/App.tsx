import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Global } from '@emotion/react';
import * as jose from 'jose';
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

import Alerts from './components/alerts/Alerts';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { userIdRequest } from './store/features/authSlice';

function App() {
  const location = useLocation();

  const state = location.state as { backgroundLocation?: Location };
  const dispatch = useAppDispatch();

  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(userIdRequest(token));
  }, []);

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

        {state?.backgroundLocation && (
          <Routes>
            <Route path="/singin" element={<SignIn />} />
            <Route path="/singup" element={<SignUp />} />
          </Routes>
        )}
      </Main>
      <Footer />
      <Alerts />
    </AppBox>
  );
}

export default App;
