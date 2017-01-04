import React from 'react'
import Aboutus from './AboutUs.jsx'
import Profile from './Profile.jsx'
import MainPage from './MainPage.jsx'
import { Router, Route, Link, browserHistory, IndexRoute,DefaultRoute,Redirect,IndexRedirect  } from 'react-router'


var LoginSuccess = React.createClass({
	render : function(){
		return (
			<MainPage />
			)
	}
})

export default LoginSuccess