import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import Aboutus from './components/AboutUs.jsx'
import Login from './components/Login.jsx'
import LoginSuccess from './components/LoginSuccess.jsx'
import {connect} from 'react-redux';
import {getInfo} from './actions/actions.js'



var App = React.createClass({
   componentDidMount: function() {
   	 this.props.getInfo();
   },
   render() {
      return (
      	<div>
      	      	{this.props["loginSuccess"]["success"]?
      	      	 (<div><LoginSuccess /></div>) 
      	      	 : 
      	      	(<div><div>
        		 <ul className="header">
            <Link to="/aboutus">
            <input type="button" value="About Us" />
            </Link>
            <Link to="/login">
            <input type="button" value="Login" />
            </Link>

         </ul>
         <div className="content">
				{this.props.children && React.cloneElement(this.props.children,{data: this.props , dispatch:this.props.dispatch  }) }
         </div>
         </div></div>)}


         </div>
      );
   }
})

const mapStateToProps = (state) => {
	return {
		basic : state.basic.info,
		loginSuccess : state.basic["loginInfo"]|| ""
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		getInfo : ()=>{ dispatch(getInfo()) }
	}
}

const MyApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default MyApp;