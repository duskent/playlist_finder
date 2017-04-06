import 'babel-polyfill';
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './containers/app'
import Reducers from './actions/reducers'

const store = createStore(Reducers)
// DOM render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
