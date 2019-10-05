import axios from 'axios';
import { SET_ERRORS, SET_NEW_USER, SET_CURRENT_USER, USER_LOADING, CLEAR_ERRORS, SET_UNAUTHENTICATED, SET_AUTHENTICATED } from '../types';
import SupportHeader from '../../utils/SupportHeader';

export const editUserDetails = ({ values: { name, phone, id } }) => async dispatch => {
  try {
    dispatch({ type: USER_LOADING, payload: true });
    const res = await axios.put(`${process.env.REACT_APP_ENDPOINT_URL}/users/${id}`, { name, phone }, SupportHeader());
    localStorage.setItem(`user`, JSON.stringify(res.data.payload));
    dispatch({ type: SET_NEW_USER, payload: res.data});
    dispatch({ type: USER_LOADING, payload: false });
    dispatch({ type: SET_AUTHENTICATED, payload: true });
  } catch (error) {
    
  }
}