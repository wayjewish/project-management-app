import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

import { GlobalStyles } from './Global.styled';
import { AppBox, Main } from './App.styled';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import HomePage from './pages/home/HomePage';
import BoardsPage from './pages/boards/BoardsPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import PrivateRoute from './components/privateRoute/PrivateRouter';
import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
export default App;
