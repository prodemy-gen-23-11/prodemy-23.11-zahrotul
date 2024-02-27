import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import Router from './router';
import './index.css'
import { CheckoutProvider } from './context/checkoutContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CheckoutProvider>
        <Router/>
      </CheckoutProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
