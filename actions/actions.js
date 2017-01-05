import {GETINFO,LOGIN,GETPROFILE,UPDATEINPROGRESS} from './actionTypes.js'
import fetch from 'isomorphic-fetch'
const URL = 'http://212.47.246.115:9510'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


export function getInfo(){

	return dispatch => {
		return fetch(URL+'/info',{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json()).then(json=>dispatch(INFO(json)))
	}
}

export function getProfileInfo(data){
	console.log(data)
	return dispatch => {
		return fetch(URL+'/profile?token='+data.data.token,{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json()).then(json=>dispatch(PROFILE(json)))
	}
}

export function login(email,password){
	var data = new FormData();
	data.append('email','alexey@plumflowerinternational.com');
	data.append('password','password1')
	return dispatch=>{
		return fetch(URL+'/login', {method: 'POST',body: data}).then(response=>{return response.json()}).then(json=>{dispatch(LOGINUSER(json)); return json}).then(json=>dispatch(getProfileInfo(json)))
	}
}

export function updateProfileAuthor(data){
	return (dispatch,getstate)=>{
		if(getstate().AppUIStatus.cancelUpdate == false){
			return fetch(URL+'/author?token='+data.data.token,{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json())
			.then(json=>dispatch(updateProfileQuote(data,json)))
		}
	}
}

export function updateProfileQuote(data,json){
	return (dispatch,getstate)=>{
		if(getstate().AppUIStatus.cancelUpdate == false){
			return fetch(URL+'/quote?token='+data.data.token+"&authorId="+json.data.authorId,{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json())
			.then(json=>dispatch(profileData(data,json)))
		}
	}
}



export function cancelUpdate(data){
	return {
		type : UPDATEINPROGRESS,
		data : data
	}
}

export function LOGINUSER(json){
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