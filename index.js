import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import App from './app';

// Render the app into root element
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
