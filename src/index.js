import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './routes';
import { initStore } from './Store';

const store = initStore();

ReactDOM.render(
  (
    <Provider store={ store }>
      <Router>
        <Route path="/" component={ routes } />
      </Router>
    </Provider>
  ), 
  document.getElementById('root')
);