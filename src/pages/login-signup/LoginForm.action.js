import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './constants/types';
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
		const response = await axios.post('/public/login', values);
		dispatch({
			type: SET_CURRENT_USER,
			payload: response.data,
		});
		dispatch(fetchingUser(false));
		navigateUser && navigateUser();
	} catch (err) {
		setErrors(err);
		dispatch({
			type: GET_ERRORS,
			payload: err,
		});
		dispatch(fetchingUser(false));
	}
};

export default loginUser;
