import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';

import 'semantic-ui-css/semantic.min.css';
ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CookiesProvider>,  
  document.getElementById('root'));
registerServiceWorker();
