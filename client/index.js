// import 'babel-core/polyfill'
// import Promise from 'es6-promise'

import React from 'react'
import ReactDOM from 'react-dom'

import { createHashHistory } from 'history'

import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, useRouterHistory, IndexRedirect} from 'react-router';
import configureStore from './store/configureStore';

import App from 'container/app';
import MainContent from 'container/main-content'
import Description from 'container/description';
import DescriptionBase from 'container/description/base';
import DescriptionPhone from 'container/description/phone';
import DescriptionStudent from 'container/description/student';
import DescriptionLastest from 'container/description/lastest';

import Signup from 'container/signup';
import SignupAddr from 'container/signup/addr';
import SignupWay from 'container/signup/way';
import SignupOnline from 'container/signup/online';

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

          <Route path="/description" component={Description} >
            <Route path="/description/base" component={DescriptionBase} />
            <Route path="/description/phone" component={DescriptionPhone}/>
            <Route path="/description/student" component={DescriptionStudent}/>
            <Route path="/description/lastest" component={DescriptionLastest}/>


            <IndexRedirect to="/description/base" />
          </Route>
    	  <Route path="/signup" component={Signup} >
            <Route path="/signup/addr" component={SignupAddr} />
            <Route path="/signup/way" component={SignupWay}/>
            <Route path="/signup/online" component={SignupOnline}/>

            <IndexRedirect to="/signup/addr" />
          </Route>

          <IndexRedirect to="/main" />
        </Route>
    </Router>
  </Provider>,
  document.querySelector('#react-content')
);
