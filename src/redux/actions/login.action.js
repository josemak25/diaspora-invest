import axios from 'axios';
import { SET_ERRORS, SET_CURRENT_USER, USER_LOADING, CLEAR_ERRORS, SET_UNAUTHENTICATED } from '../types';
import { createToken, eraseToken } from '../../utils/token';
import SupportHeader from '../../utils/SupportHeader';

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
		const res = await axios.post('auth/login', values);
		if(!res.data.token) throw new Error('Server is Down');
		createToken(res.data.token, 1);
		sessionStorage.setItem(`user`, JSON.stringify(res.data.payload.id));
		delete res.data.token
		dispatch({
			type: SET_CURRENT_USER,
			payload: res.data,
		});
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
  const userId = JSON.parse(sessionStorage.getItem("user"));
  if (userId) {
		const res = await axios.get(`users/${userId}`, SupportHeader());
		createToken(res.data.token);
		delete res.data.token
		dispatch({
			type: SET_CURRENT_USER,
			payload: res.data,
		});
  }
};

export const logout = () => dispatch => {
	eraseToken();
	dispatch({ type: SET_UNAUTHENTICATED });
}

export default loginUser;
