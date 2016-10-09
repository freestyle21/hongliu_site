// import 'babel-core/polyfill'
// import Promise from 'es6-promise'

import React from 'react'
import ReactDOM from 'react-dom'

import { createHashHistory } from 'history'

import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, useRouterHistory, IndexRedirect} from 'react-router';
import configureStore from './store/configureStore';

import App from 'container/app';
import MainContent from 'container/main-content';
import DetailContent from 'container/detail-content';
import 'antd/lib/index.css'
import './index.less';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={MainContent}/>
  	
          <Route path="/main" component={MainContent} />
          <Route path="/a" component={DetailContent} />
    			<Route path="/b" component={DetailContent} />

          <IndexRedirect to="/main" />
        </Route>
    </Router>
  </Provider>,
  document.querySelector('#react-content')
);
