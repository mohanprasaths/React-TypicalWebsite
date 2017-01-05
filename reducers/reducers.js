import { combineReducers } from 'redux'
import {GETINFO,LOGIN,GETPROFILE,UPDATEINPROGRESS} from '../actions/actionTypes.js'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


function basic(state={},action){
	switch(action.type){
		case GETINFO : return Object.assign({},state,{info : action.data});
		case LOGIN : 	{ return Object.assign({},state,{loginInfo : action.data});}
		default : return state;
	}
}

function profileInfo(state={},action){
	switch(action.type){
		case GETPROFILE: return Object.assign({},state,{profile : action.data});
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
		default : return state
	}
}

const myApp = combineReducers({
	basic , profileInfo , reRoutting ,AppUIStatus
})

export default myApp