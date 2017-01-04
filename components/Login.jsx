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
		return (
				<div>
				<input type="text" id="email" onChange={this.handleEmailChange}/>
				<input type="text" id="password" onChange={this.handlePasswordChange}/>
				<input type="submit" onClick={this.handleLogin}/>
				</div>
			)
	},
	handleLogin: function() {
		this.props.loginUser('s','s');
}
})

const mapStateToProps = (state) => {
	return {
		loginInfo : state.basic.loginInfo
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser : (name,pass)=>{ dispatch(login(name,pass)) }
	}
}

const MyLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default MyLogin;