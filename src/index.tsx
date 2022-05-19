import React from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';
=======
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
>>>>>>> origin/develop

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Provider store={store}>
<<<<<<< HEAD
    <App />
=======
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
>>>>>>> origin/develop
  </Provider>
);
