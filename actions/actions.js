import {GETINFO,LOGIN,GETPROFILE} from './actionTypes.js'
import fetch from 'isomorphic-fetch'
const URL = 'http://212.47.246.115:9510'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


export function getInfo(){

	return dispatch => {
		return fetch(URL+'/info',{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json()).then(json=>dispatch(INFO(json)))
	}
}

export function getProfileInfo(data){

	return dispatch => {
		return fetch(URL+'/profile?token'+data.data.token,{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json()).then(json=>dispatch(PROFILE(json)))
	}
}

export function login(email,password){
	var data = new FormData();
	data.append('email','alexey@plumflowerinternational.com');
	data.append('password','password1')
	return dispatch=>{
		return fetch(URL+'/login', {method: 'POST',body: data}).then(response=>{return response.json()}).then(json=>dispatch(LOGINUSER(json)))
	}
}

export function LOGINUSER(json){
	console.log(json)
	browserHistory.push('/profile')

	return {
		type : LOGIN,
		data : json
	}
}

export function INFO(json){
	return {
		type : GETINFO,
		data : json
	}
}

export function PROFILE(json){
	return {
		type : GETPROFILE,
		data : json
	}
}