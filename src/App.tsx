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
import EditProfile from './components/editProfile/EditProfile';

import PrivateRoute from './components/privateRoute/PrivateRouter';
import HomePage from './pages/home/HomePage';
import BoardsPage from './pages/boards/BoardsPage';
import BoardPage from './pages/board/BoardPage';
import NotFoundPage from './pages/notFound/NotFoundPage';

import Alerts from './components/alerts/Alerts';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getUserIdFromToken } from './store/features/authSlice';

function App() {
  const location = useLocation();

  const state = location.state as { backgroundLocation?: Location };
  const dispatch = useAppDispatch();

  const { userId, token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token && !userId) {
      dispatch(getUserIdFromToken(token));
    }
  }, []);

  return (
    <AppBox>
      <Global styles={GlobalStyles} />
      <Header />
      <Main>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/editprofile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />

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
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/editprofile" element={<EditProfile />} />
          </Routes>
        )}
      </Main>
      <Footer />
      <Alerts />
    </AppBox>
  );
}

export default App;
