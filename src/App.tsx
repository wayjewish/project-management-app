import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalStyles } from './Global.styled';
import { AppBox, Main } from './App.styled';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LoginPopup from './components/Modal/ModalLogin';
import SingupPopup from './components/Modal/ModalSingup';

import HomePage from './pages/home/HomePage';
import BoardsPage from './pages/boards/BoardsPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import PrivateRoute from './components/privateRoute/PrivateRouter';
import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  let location = useLocation();
  let state = location.state as { backgroundLocation?: Location };
  return (
    <Provider store={store}>
      <AppBox>
        <Global styles={GlobalStyles} />
        <Header />
        <Main>
          <Routes location={state?.backgroundLocation || location}>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPopup />} />
            <Route path="singup" element={<SingupPopup />} />
            
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
          {state?.backgroundLocation && (
            <Routes>
              <Route path="login" element={<LoginPopup />} />
              <Route path="singup" element={<SingupPopup />} />
            </Routes>
          )}
        </Main>
        <Footer />
      </AppBox>
    </Provider>
  );
}

export default App;
