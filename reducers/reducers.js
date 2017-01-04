import { combineReducers } from 'redux'
import {GETINFO,LOGIN,GETPROFILE} from '../actions/actionTypes.js'


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

const myApp = combineReducers({
	basic , profileInfo
})

export default myApp