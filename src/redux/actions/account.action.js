import axios from 'axios';
import { SET_ERRORS, SET_NEW_USER, SET_CURRENT_USER, USER_LOADING, CLEAR_ERRORS, SET_UNAUTHENTICATED, SET_AUTHENTICATED } from '../types';
import SupportHeader from '../../utils/SupportHeader';

export const editUserDetails = ({ newUserDetails, id }) => async dispatch => {
  try {
    console.log(11111);
    dispatch({ type: USER_LOADING, payload: true });
    const res = await axios.put(`users/${id}`, newUserDetails, SupportHeader());
    console.log(res);
    dispatch({ type: SET_NEW_USER, payload: res.data});
    dispatch({ type: USER_LOADING, payload: false });
    dispatch({ type: SET_AUTHENTICATED, payload: true });
    console.log(2222)
  } catch (error) {
    
  }
}