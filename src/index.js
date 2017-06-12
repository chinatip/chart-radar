import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { initStore } from './Store';
import { Provider } from 'react-redux'

ReactDOM.render(
    <App />
  , document.getElementById('root'));
registerServiceWorker();
