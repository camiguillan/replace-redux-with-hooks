import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './context/products-context';

import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductProvider>);