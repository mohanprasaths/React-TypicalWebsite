import {INFO} from './actionTypes.js'
import fetch from 'isomorphic-fetch'
var URL = 'http://212.47.246.115:9510'

export function getInfo(){
	return dispatch => {
		return fetch(URL+'/info').then(response=>response.json).then(json=>dispatch(INFO(json)))
	}
}

export funtion INFO(json){
	return {
		type : INFO,
		data : json
	}
}