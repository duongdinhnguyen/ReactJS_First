import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {ThemeProvider} from './ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <App></App>
    </ThemeProvider>
);

reportWebVitals();
