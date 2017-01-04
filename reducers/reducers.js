import { combineReducers } from 'redux'
import {GETINFO,LOGIN} from '../actions/actionTypes.js'

function basic(state={},action){
	switch(action.type){
		case GETINFO : return Object.assign({},state,{info : action.data});
		case LOGIN : return Object.assign({},state,{loginInfo : action.data});
		default : return state;
	}
}

const myApp = combineReducers({
	basic
})

export default myApp