import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import CartItem from './CartItem';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CartItem />
  </React.StrictMode>
);


