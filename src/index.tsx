import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap';
import AppAlerts from './components/app/AppAlerts';
import AppToasts from './components/app/AppToasts';
import './styles/global.scss';
import App from './App';
import store from './store';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppAlerts />
        <AppToasts />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
