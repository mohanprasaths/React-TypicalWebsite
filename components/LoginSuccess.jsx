import React from 'react'
import Aboutus from './components/AboutUs.jsx'
import Profile from './component/Profile.jsx'

var LoginSuccess = React.createClass({
	render : function(){
		return (
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Aboutus} />
         <Route name="aboutus" path = "aboutus" component = {Aboutus} />
         <Route path = "profile" component = {Profile} />
		 <Redirect from='*' to='/aboutus' />
      </Route>
   </Router>
			)
	}
})

export default LoginSuccess