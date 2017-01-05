import {GETINFO,LOGIN,GETPROFILE,UPDATEINPROGRESS,PROFILEDATA,GETAUTHOR,GETQUOTE,LOGOUT,INVALID} from './actionTypes.js'
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
	data.append('email',email);
	data.append('password',password)
	return dispatch=>{
		return fetch(URL+'/login', {method: 'POST',body: data}).then(response=>{return response.json()}).then(json=>{if(json.success == true){dispatch(VALIDCREDENTIALS());dispatch(LOGINUSER(json)); return json}else{dispatch(INVALIDCREDENTIALS());return json}}).then(json=>{if(json.success == true){return dispatch(getProfileInfo(json))}else{return null}})
	}
}

export function updateProfileAuthor(data){
	return (dispatch,getstate)=>{
		if(getstate().AppUIStatus.cancelUpdate == false){
			return fetch(URL+'/author?token='+data.data.token,{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json())
			.then(json=>{dispatch(authorCompleted(true));return json}).then(json=>dispatch(updateProfileQuote(data,json)))
		}
	}
}

export function updateProfileQuote(data,author){
	return (dispatch,getstate)=>{
		if(getstate().AppUIStatus.cancelUpdate == false){
			return fetch(URL+'/quote?token='+data.data.token+"&authorId="+author.data.authorId,{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json())
			.then(json=>{dispatch(quoteCompleted(true));return json}).then(json=>dispatch(profileData(author,json)))
		}
	}
}

export function logoutUser(data){
	return (dispatch,getstate)=>{

			return fetch(URL+'/logout?token='+data.data.token,{method:'DELETE',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json())
			.then(json=>{return dispatch(LOGOUTACTION(json))})
		
	}
}

export function LOGOUTACTION(json){
	if(json.success == true){
		return {
			type:LOGOUT,
			data : json
		}
	}
}

export function profileData(authorData,quoteData){
	return {
		type : PROFILEDATA,
		data : {authorData : authorData , quoteData : quoteData}
	}
}

export function authorCompleted(data){
	return {
		type : GETAUTHOR,
		data : data
	}
}
export function quoteCompleted(data){
	return {
		type : GETQUOTE,
		data : data
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
export function INVALIDCREDENTIALS(){
	return {
		type : INVALID,
		data : true
	}
}

export function VALIDCREDENTIALS(){
	return {
		type:INVALID,
		data : false
	}
}