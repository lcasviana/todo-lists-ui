import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/styles/index.css';
import Todo from './app/todo/todo';
import Store from './app/core/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Route path='/' component={Todo} exact />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);