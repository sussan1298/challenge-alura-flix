import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from 'routes';
import ModalContextProvider from 'components/Context/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalContextProvider>
    <AppRoutes />
    </ModalContextProvider>
  </React.StrictMode>
);

