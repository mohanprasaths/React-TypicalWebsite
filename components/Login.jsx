import React from 'react';
import login from '../actions/actions.js'

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
		login('s','n')
}
})

const mapStateToProps = (state) => {
	return {
		counter : state.basic.info
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		login : ()=>{ dispatch(login()) }
	}
}

const MyApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default Login;