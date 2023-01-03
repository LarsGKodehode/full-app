// Libraries
// CSS
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App';

// Create the React object
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Start rendering
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
