import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import Navigation from './components/UI/Navigation';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);


