import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.scss';
// import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <ScrollToTop /> */}
    <App />
  </BrowserRouter>
);

reportWebVitals();
