import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initStore } from './Store';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const store = initStore()

ReactDOM.render(
    <Provider store={ store }>
      <Router>
          <Route path="/" component={ App } />
      </Router>
    </Provider>
  , document.getElementById('root'));