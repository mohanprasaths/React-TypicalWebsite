import { combineReducers } from 'redux'
import {GETINFO,LOGIN,GETPROFILE,UPDATEINPROGRESS,PROFILEDATA,GETAUTHOR,GETQUOTE,LOGOUT,INVALID} from '../actions/actionTypes.js'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


function basic(state={},action){
	switch(action.type){
		case GETINFO : return Object.assign({},state,{info : action.data});
		case LOGIN : 	{ return Object.assign({},state,{loginInfo : action.data});}
		case LOGOUT : {browserHistory.push('/');return Object.assign({},state,{loginInfo : null});}
		default : return state;
	}
}

function profileInfo(state={},action){
	switch(action.type){
		case GETPROFILE: return Object.assign({},state,{profile : action.data});
		case PROFILEDATA : return Object.assign({},state,{profiledata : action.data});
		default : return state;
	}
}

function reRoutting(state={},action){
	switch(action.type){
		case LOGIN : {browserHistory.push('/profile'); return state;}
		default : return state;
	}
}

function AppUIStatus(state={},action){
	switch(action.type){
		case UPDATEINPROGRESS : return Object.assign({},state,{cancelUpdate : action.data})
		case GETAUTHOR : return Object.assign({},state,{authorCompleted : action.data}) 
		case GETQUOTE :  return Object.assign({},state,{quoteCompleted : action.data}) 
		case INVALID :  return Object.assign({},state,{invalidLogin : action.data}) 
		default : return state
	}
}

const myApp = combineReducers({
	basic , profileInfo , reRoutting ,AppUIStatus
})

export default myApp