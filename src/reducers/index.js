import { combineReducers } from 'redux';
import authReducers from './authReducers';
import errorReducers from './errorReducers';
import propertyReducers from "./propertyReducers";

export default combineReducers({
	auth: authReducers,
	err: errorReducers,
	properties: propertyReducers
});
