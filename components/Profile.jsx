import React from 'react'
import {connect} from 'react-redux';
import {getProfileInfo} from '../actions/actions'

var Profile = React.createClass({
	componentWillMount: function() {
		if(this.props["loginInfo"]){
			this.props.getProfileInfo(this.props.loginInfo)
		}
	},
	componentWillUpdate: function(nextProps, nextState) {
		if(this.props["loginInfo"]){
			this.props.getProfileInfo(this.props.loginInfo)
		}
	},
	render : function(){
		return(
			<div>{this.props.profileInfo["fullname"]}</div>
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

const MyProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default MyProfile;