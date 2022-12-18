import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from './store';
import theme from './styles/theme';

import { ThemeProvider } from '@mui/material/styles';

import { BrowserRouter } from 'react-router-dom';

import './styles/base.css';
import './index.css';

/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
