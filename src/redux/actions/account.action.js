import axios from 'axios';
import { SET_NEW_USER, USER_LOADING, SET_AUTHENTICATED, SET_AGENCY, AGENCY_LOADING } from '../types';
import SupportHeader from '../../utils/SupportHeader';

export const editUserDetails = ({ values: { name, phone, id } }) => async dispatch => {
  try {
    const res = await axios.put(`${process.env.REACT_APP_ENDPOINT_URL}/users/${id}`, { name, phone }, SupportHeader());
    localStorage.setItem(`user`, JSON.stringify(res.data.payload));
    dispatch({ type: USER_LOADING, payload: true });
    dispatch({ type: SET_NEW_USER, payload: res.data});
    dispatch({ type: SET_AUTHENTICATED, payload: true });
    setTimeout(()=>{
      dispatch({ type: USER_LOADING, payload: false });
    }, 2000);
  } catch (error) {
    
  }
}

//agency-profile
export const editAgencyProfileDetails = ({ values: { business_name, phone, website, business_address } }) => async dispatch => {
  try {
    const { id } = JSON.parse(localStorage.getItem(`user`));

    const res = await axios.put(`${process.env.REACT_APP_ENDPOINT_URL}/agency-profile/edit/${id}`, { business_name, phone, website, business_address}, SupportHeader());
    localStorage.setItem(`agency`, JSON.stringify(res.data.payload));
    dispatch({ type: AGENCY_LOADING, payload: true });
    dispatch({ type: SET_AGENCY, payload: res.data});
    setTimeout(() => {
      dispatch({ type: AGENCY_LOADING, payload: false });
    }, 2000);
  } catch (error) {
    console.log(error.message)
  }
}

export const getAgencyProfileDetails = id => async dispatch => {
  try {
    dispatch({ type: AGENCY_LOADING, payload: true });
    const res = await axios.get(`${process.env.REACT_APP_ENDPOINT_URL}/agency-profile/${id}`, SupportHeader());
    localStorage.setItem(`agency`, JSON.stringify(res.data.payload));
    dispatch({ type: SET_AGENCY, payload: res.data});
    dispatch({ type: AGENCY_LOADING, payload: false });
  } catch (error) {
    
  }
}