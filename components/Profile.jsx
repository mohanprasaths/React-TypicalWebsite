import React from 'react'
import {connect} from 'react-redux';
import {getProfileInfo,updateProfileAuthor,cancelUpdate,authorCompleted,quoteCompleted,logoutUser} from '../actions/actions'
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
		this.props.quoteCompleted(false)
		this.props.authorCompleted(false)
		this.props.updateProfileData(this.props.loginInfo);
		this.handleOpenModal()
	},
	logoutUserFunc : function(){
		this.props.logoutUser(this.props.loginInfo)
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
			<div className="container-fluid">
			<div className="row">
			<div className="col-sm-1">
			<img className="img-circle width110" src={"http://212.47.246.115:9510/"+this.props.profileInfo["avatar"]} />
			</div>
			<div className="col-sm-4">
			<div className="row-sm-1">Welcome {this.props.profileInfo["fullname"]} !!!</div>

			<div className="row-sm-1"><input type="button" className="btn btn-primary" value="Update" onClick={this.UpdateProfileProcess} /></div>
			</div>
			</div>
			<div className="row">
			<div className="col-sm-12">
			{this.props.profileData?(<blockquote>{this.props.profileData.authorData.data.name } says {this.props.profileData.quoteData.data.quote}</blockquote>):""}
			</div>
			</div>
			<ReactModal 
			   isOpen={this.state.showModal}
			   contentLabel="Minimal Modal Example"
			>
			<h1>Requesting the quote</h1>
			<p>Step 1 : Requesting author...{this.props.UIStatus.authorCompleted? "Completed" : ""}</p>
			<p>Step 2 : Requesting quote...{this.props.UIStatus.quoteCompleted? "Completed" : ""}</p>
			  <button className="btn btn-primary" onClick={this.handleCloseModal}>Cancel</button>
			
			</ReactModal>
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
		getProfileInfo : (token)=>{ dispatch(getProfileInfo(token)) },
		updateProfileData : (token)=>{ dispatch(updateProfileAuthor(token)) },
		cancelUpdate : (data)=>{dispatch(cancelUpdate(data))},
		quoteCompleted : (data)=>{dispatch(quoteCompleted(data))},
		authorCompleted : (data)=>{dispatch(authorCompleted(data))},
		logoutUser : (data)=>{dispatch(logoutUser(data))}
	}
}

const MyProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default MyProfile;