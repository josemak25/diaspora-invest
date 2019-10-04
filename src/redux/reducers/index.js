import { combineReducers } from 'redux';
import authReducers from './auth.reducers';
import errorReducers from './error..reducers';
import propertyReducers from "./property.reducers";

export default combineReducers({
	auth: authReducers,
	err: errorReducers,
	properties: propertyReducers
});
