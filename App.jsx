import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import Aboutus from './components/AboutUs.jsx'
import Login from './components/Login.jsx'

class App extends React.Component {
   render() {
      return (
         <div>
         <ul className="header">
            <Link to="/aboutus">
            <input type="button" value="About Us" />
            </Link>
            <Link to="/login">
            <input type="button" value="Login" />
            </Link>

         </ul>
         <div className="content">
          {this.props.children}
         </div>
         </div>
      );
   }
}

export default App;