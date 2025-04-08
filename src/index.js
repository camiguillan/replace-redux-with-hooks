import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './context/products-context';
import { configureStore } from './hooks-store/products-store';

import './index.css';
import App from './App';

configureStore(); 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ProductProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // </ProductProvider>
    );