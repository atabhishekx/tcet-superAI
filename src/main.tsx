import React from 'react';
import ReactDOM from 'react-dom/client';
import '../app/globals.css';
import Site from '../components/site';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
);
