import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Pass the DOM element directly
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
