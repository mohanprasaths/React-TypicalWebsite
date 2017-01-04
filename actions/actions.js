import {GETINFO} from './actionTypes.js'
import fetch from 'isomorphic-fetch'
const URL = 'http://212.47.246.115:9510'

export function getInfo(){

	return dispatch => {
	return fetch(URL+'/info',{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json()).then(json=>dispatch(INFO(json)))
}
}

export function login(email,password){
	var data = new FormData();
	data.append('email','alexey@plumflowerinternational.com');
	data.append('password','password1')
	return dispatch=>{
		return fetch(URL+'/login', {method: 'POST',body: data}).then(response=>response.json()).then(json=>dispatch(LOGINUSER(json)))
	}
}

export function LOGINUSER(json){
	console.log(json)
}

export function INFO(json){
	return {
		type : GETINFO,
		data : json
	}
}