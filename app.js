import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
const Heading = () => <h1>hello world!</h1>;
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<Heading />);
