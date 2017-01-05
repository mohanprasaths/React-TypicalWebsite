import React from 'react'
import {connect} from 'react-redux';
import {getProfileInfo,updateProfileAuthor,cancelUpdate} from '../actions/actions'
import ReactModal from 'react-modal';

var Profile = React.createClass({
	handleOpenModal () {
	  this.setState({ showModal: true });
	},
	handleCloseModal () {
		this.props.cancelUpdate(true)
	   this.setState({ showModal: false });
	 },
	UpdateProfileProcess : function(){
		this.props.cancelUpdate(false)
		this.props.updateProfileData(this.props.loginInfo);
		this.handleOpenModal()
	},
	componentDidMount : function() {
		if(this.props["loginInfo"]){
			this.props.getProfileInfo(this.props.loginInfo)
		}
	},
	componentWillMount: function() {
		this.setState({showModal : false})
	},
	render : function(){
		return(
			<div>
			<img src={"http://212.47.246.115:9510/"+this.props.profileInfo["avatar"]} />
			<div>Welcome {this.props.profileInfo["fullname"]}</div>
			<input type="button" value="Update" onClick={this.UpdateProfileProcess} />
			<ReactModal 
			   isOpen={this.state.showModal}
			   contentLabel="Minimal Modal Example"
			>
			  <button onClick={this.handleCloseModal}>Close Modal</button>
			</ReactModal>
			</div>
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
		getProfileInfo : (token)=>{ dispatch(getProfileInfo(token)) },
		updateProfileData : (token)=>{ dispatch(updateProfileAuthor(token)) },
		cancelUpdate : (data)=>{dispatch(cancelUpdate(data))}
	}
}

const MyProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default MyProfile;