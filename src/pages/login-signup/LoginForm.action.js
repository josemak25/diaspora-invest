import axios from 'axios';
import { SET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './constants/types';
import { createCookie } from '../../utils/cookie';
// User loading
export const fetchingUser = payload => {
	return {
		type: USER_LOADING,
		payload,
	};
};

// Login - get user token
export const loginUser = (values, setErrors, navigateUser) => async dispatch => {
	try {
		dispatch(fetchingUser(true));
		const res = await axios.post('auth/login', values);
		if(!res.data.token) throw new Error('Server is Down');
		createCookie(process.env.REACT_APP_COOKIE_NAME, res.data.token, 1);
		sessionStorage.setItem(`user`, JSON.stringify(res.data.payload));
		dispatch({
			type: SET_CURRENT_USER,
			payload: res.data,
		});
		dispatch(fetchingUser(false));
		navigateUser && navigateUser();
	} catch (err) {
		setErrors(err);
		dispatch({
			type: SET_ERRORS,
			payload: err,
		});
		dispatch(fetchingUser(false));
		return err;
	}
};

export default loginUser;
