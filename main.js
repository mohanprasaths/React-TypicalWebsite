import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Aboutus from './components/AboutUs.jsx'
import Login from './components/Login.jsx'
import { Router, Route, Link, browserHistory, IndexRoute,DefaultRoute,Redirect,IndexRedirect  } from 'react-router'
import {createStore} from 'redux'
import {Provider } from 'react-redux'




ReactDOM.render(
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Aboutus} />
         <Route name="aboutus" path = "aboutus" component = {Aboutus} />
         <Route path = "login" component = {Login} />
		 <Route path='/404' component={Aboutus} />
		 <Redirect from='*' to='/aboutus' />


      </Route>
   </Router>
	
	, document.getElementById('app'));