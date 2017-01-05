import React from 'react'
import Aboutus from './AboutUs.jsx'
import Profile from './Profile.jsx'
import MainPage from './MainPage.jsx'
import { Router, Route, Link, browserHistory, IndexRoute,DefaultRoute,Redirect,IndexRedirect  } from 'react-router'
import {connect} from 'react-redux';
import {getProfileInfo} from '../actions/actions'

var LoginSuccess = React.createClass({
	render : function(){
		return (
			<MainPage data={this.props}/>
			)
	}
})

const mapStateToProps = (state) => {
	return {
		loginInfo : state.basic.loginInfo,
		profileInfo : (state.profileInfo["profile"]? state.profileInfo["profile"]["data"] : "")
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		getProfileInfo : (token)=>{ dispatch(getProfileInfo(token)) }
	}
}

const MyLoginSuccess = connect(mapStateToProps, mapDispatchToProps)(LoginSuccess);

export default MyLoginSuccess;

