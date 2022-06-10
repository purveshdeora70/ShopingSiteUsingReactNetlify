import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM
.createRoot(document.getElementById('root'))
  .render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );

