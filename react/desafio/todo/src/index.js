import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './Styles/Global'
import Dashboard from '../src/components/Dashboard/Dashboard'


ReactDOM.render(
  <React.StrictMode>
  <GlobalStyle />
  <Dashboard/>
  </React.StrictMode>,
  document.getElementById('root') 
);
