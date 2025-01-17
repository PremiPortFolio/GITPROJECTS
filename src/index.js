import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PropsPassApp from './PropsPassApp';
import PropsGetApp from './PropsGetComp';
import GoToFile from './gotoFile';
import PropsNavigation from './PropsNavigation';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PropsNavigation/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
