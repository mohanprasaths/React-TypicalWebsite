import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Aboutus from './components/AboutUs.jsx'
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'
import { Router, Route, Link, browserHistory, IndexRoute,DefaultRoute,Redirect,IndexRedirect  } from 'react-router'
import {createStore} from 'redux'
import myApp from './reducers/reducers'
import {Provider } from 'react-redux'
import configureStore from './configureStore'


let store = configureStore();


ReactDOM.render(
	<Provider store={store} >
   <Router history = {browserHistory}>
   <Route path = "/" component = {App}>
   <IndexRoute component = {Aboutus} />
   <Route name="aboutus" path = "aboutus" component = {Aboutus} />
   <Route path = "login" component = {Login} />
   <Route path="profile" component={Profile}/>
   
   <Route path='/404' component={Aboutus} />
   <Route path="*" component={App}/>


   </Route>
   </Router>
   </Provider>
   , document.getElementById('app'));