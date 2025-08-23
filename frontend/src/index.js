// File: frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Correct path to App.js
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.js'; // Correct path to StoreContext.js

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);