// Global
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'

// Local
import App from './App';
import { AuthProvider } from './state/auth';

ReactDOM.render(<AuthProvider><App/></AuthProvider>, document.getElementById('root'));
