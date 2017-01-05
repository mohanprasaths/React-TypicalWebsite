import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import Profile from './Profile.jsx'
import {logoutUser} from '../actions/actions'
import {connect} from 'react-redux';



var MainPage = React.createClass({
	logoutUserFunc : function(){
		this.props.logoutUser(this.props.loginInfo)
	},
	render : function(){
		return(
			<div className="container-fluid">
			<div>
			<div className="row">
			<div className="col-sm-1">
			<Link to="/aboutus">
			<input type="button" className="btn-default btn" value="About Us" />
			</Link>
			</div>
			<div className="col-sm-1">
			<Link to="/profile">
			<input type="button" className="btn-default btn" value="Profile" />
			</Link>
			</div>
			<div className="col-sm-1">
			<input type="button" className="btn-default btn" value="Sign out"  onClick={this.logoutUserFunc}/>
			</div>
			</div>
			<div className="row">
			<div className = "col-sm-12">
			{this.props.children && React.cloneElement(this.props.children,{data: this.props , dispatch:this.props.dispatch  }) }
			</div>
			</div>
			</div>
			</div>
			)
	}
})

const mapStateToProps = (state) => {
	return {
		loginInfo : state.basic.loginInfo,
		profileInfo : (state.profileInfo["profile"]? state.profileInfo["profile"]["data"] : ""),
		UIStatus : state.AppUIStatus,
		profileData : state.profileInfo["profiledata"]
	}
} 


const mapDispatchToProps = (dispatch) => {
	return {
		logoutUser : (data)=>{dispatch(logoutUser(data))}
	}
}

const MyMainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MyMainPage;

