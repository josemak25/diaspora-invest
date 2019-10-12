import axios from 'axios';

import store from '../../redux/store';
 
import {
  SET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  CLEAR_ERRORS,
  AGENCY_LOADING,
  SET_AGENCY,
  RESET
} from "../types";
import { createToken, eraseToken } from '../../utils/token';
import SupportHeader from '../../utils/SupportHeader';

import { getAgencyProfileDetails } from './account.action';
import { getAgencies } from './dashboard.action';

// User loading
export const fetchingUser = payload => {
	return {
		type: USER_LOADING,
		payload,
	};
};

// Login - get user token
export const loginUser = (values, navigateUser) => async dispatch => {
	try {
		dispatch(fetchingUser(true));
		const res = await axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/auth/login`, values);
		if(!res.data.token) throw new Error('Server is Down');
		createToken(res.data.token, 1);
		localStorage.setItem(`user`, JSON.stringify(res.data.payload));
		delete res.data.token
		dispatch({
			type: SET_CURRENT_USER,
			payload: res.data,
		});
		
		if( res.data.payload.user_type === 'seller') {
			dispatch({ type: AGENCY_LOADING, payload: true });
			const res2 = await axios.get(`${process.env.REACT_APP_ENDPOINT_URL}/agency-profile/${res.data.payload.id}`, SupportHeader());
			localStorage.setItem(`agency`, JSON.stringify(res2.data.payload));
			dispatch({ type: SET_AGENCY, payload: res2.data});
			dispatch({ type: AGENCY_LOADING, payload: false });
		}

		if (res.data.payload.user_type === "admin") {
			store.dispatch(getAgencies());
		}

		dispatch(fetchingUser(false));
		dispatch({ type: CLEAR_ERRORS });
		navigateUser && navigateUser();
	} catch (err) {
		dispatch({
			type: SET_ERRORS,
			payload: err,
		});
		dispatch(fetchingUser(false));
	}
};

export const getUser = () => async dispatch => {
  const { id: userId} = JSON.parse(localStorage.getItem("user"));
  if (userId) {
		const res = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_URL}/users/${userId}`,
      SupportHeader()
    );
		createToken(res.data.token);
		delete res.data.token
		dispatch({
			type: SET_CURRENT_USER,
			payload: res.data,
		});

		if (res.data.payload.user_type === 'seller') {
			store.dispatch(getAgencyProfileDetails(userId));
		};
  }
};


export const logout = () => dispatch => {
	eraseToken();
	dispatch({ type: RESET });
}

export default loginUser;
