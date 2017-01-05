import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import Profile from './Profile.jsx'



var MainPage = React.createClass({
	render : function(){
		return(
			<div>
			<ul className="header">
			<Link to="/aboutus">
			<input type="button" value="About Us" />
			</Link>
			<Link to="/profile">
			<input type="button" value="Profile" />
			</Link>
			<input type="button" value="Sign out" />


			</ul>
			<div className="content">
			{this.props.children && React.cloneElement(this.props.children,{data: this.props , dispatch:this.props.dispatch  }) }
			</div>
			</div>
			)
	}
})

export default MainPage