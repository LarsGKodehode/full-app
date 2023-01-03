// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

// Components
import App from './App';

// Create the React object
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// Start rendering
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
