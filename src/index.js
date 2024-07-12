import React from 'react';
import ReactDOM from 'react-dom/client';
import locale from 'locale'
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

document.title = locale?.nav.title;
document.documentElement.lang = locale?.global.lang;

const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = locale?.nav.description;
document.head.appendChild(metaDescription);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
