/* @flow */
/*
  Import Dependencies
*/

import React from 'react';
import { render } from 'react-dom';
import './styles/style.css'
import 'babel-polyfill';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Main}>
        <IndexRoute component={PhotoGrid} />
        <Route path='/view/:postId' component={Single} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
