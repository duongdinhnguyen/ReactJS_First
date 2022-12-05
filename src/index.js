import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { StoreProvider } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
        <App/>
    </StoreProvider>
);

reportWebVitals();
