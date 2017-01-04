import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/reducers.js'


export default function configureStore(preloadedstate){
	return createStore(
			rootReducer,
			preloadedstate,
			applyMiddleware(
					thunkMiddleware
				)
		)
}
export const store= applyMiddleware(
					thunkMiddleware
				)(createStore)(rootReducer);
