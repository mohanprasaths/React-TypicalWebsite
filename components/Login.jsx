import React from 'react';
import {login} from '../actions/actions.js'
import {connect} from 'react-redux';

var Login = React.createClass({
	handleEmailChange: function(e) {
		this.setState({email: e.target.value});
	},
	handlePasswordChange: function(e) {
		this.setState({password: e.target.value});
	},
	render : function(){
		var classForGroup ="form-group " + this.props.error === true?"has-error":"";
		return (
			<div >
			<div className={classForGroup}>
			  <label htmlFor="usr" className="control-label font20">Email Address:</label>
			  <input type="text" className="form-control" id="usr" placeholder="Enter Email " onChange={this.handleEmailChange}/>
			</div>
			<div className={classForGroup}>
			  <label htmlFor="pwd" className="control-label font20">Password:</label>
			  <input type="password" className="form-control" id="pwd" placeholder="Password" onChange={this.handlePasswordChange}/>
			</div>
			<button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Submit</button>
			<div>{this.props.error?"Invalid Data":" "}</div>
			</div>
			)
	},
	handleLogin: function() {
		this.props.loginUser(this.state.email,this.state.password);

	}
})

const mapStateToProps = (state) => {
	return {
		loginInfo : state.basic.loginInfo,
		error : state.AppUIStatus.invalidLogin
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser : (name,pass)=>{ dispatch(login(name,pass)) }
	}
}

const MyLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default MyLogin;