import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const content1 = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(
  content1,
  document.getElementById('root')
);
