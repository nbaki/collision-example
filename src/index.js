import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
