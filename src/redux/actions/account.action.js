import axios from 'axios';
import { SET_NEW_USER, USER_LOADING, SET_AUTHENTICATED, SET_AGENCY, AGENCY_LOADING, SAVING_AGENCY_PROFILE, HAS_AGENCY, SET_AGENCY_ERRORS } from '../types';
import SupportHeader from '../../utils/SupportHeader';

const baseUrl = process.env.REACT_APP_ENDPOINT_URL;

export const editUserDetails = ({ values: { name, phone, id } }) => async dispatch => {
  try {
    const res = await axios.put(`${baseUrl}/users/${id}`, { name, phone }, SupportHeader());
    localStorage.setItem(`user`, JSON.stringify(res.data.payload));
    dispatch({ type: USER_LOADING, payload: true });
    dispatch({ type: SET_NEW_USER, payload: res.data});
    dispatch({ type: SET_AUTHENTICATED, payload: true });
    setTimeout(()=>{
      dispatch({ type: USER_LOADING, payload: false });
    }, 2000);
  } catch (error) {
    dispatch({ type: USER_LOADING, payload: false });
    console.log(error);
  }
}

//agency-profile
export const editAgencyProfileDetails = ({ values: { business_name, phone, website, business_address } }) => async dispatch => {
  try {
    const { id } = JSON.parse(localStorage.getItem(`user`));

    const res = await axios.put(`${baseUrl}/agency-profile/edit/${id}`, { business_name, phone, website, business_address}, SupportHeader());
    localStorage.setItem(`agency`, JSON.stringify(res.data.payload));
    dispatch({ type: AGENCY_LOADING, payload: true });
    dispatch({ type: SET_AGENCY, payload: res.data});
    setTimeout(() => {
      dispatch({ type: AGENCY_LOADING, payload: false });
    }, 2000);
  } catch (error) {
    dispatch({ type: AGENCY_LOADING, payload: false });
    console.log(error.message)
  }
}

export const getAgencyProfileDetails = id => async dispatch => {
  try {
    dispatch({ type: AGENCY_LOADING, payload: true });
    const res = await axios.get(`${baseUrl}/agency-profile/${id}`, SupportHeader());
    dispatch({ type: HAS_AGENCY, payload: true });
    localStorage.setItem(`agency`, JSON.stringify(res.data.payload));
    dispatch({ type: SET_AGENCY, payload: res.data});
    dispatch({ type: AGENCY_LOADING, payload: false });
  } catch (error) {
    dispatch({ type: AGENCY_LOADING, payload: false });
    console.log(error);   
  }
}

export const setUpAgencyProfile = ({ business_name, email, business_address, website, phone, documents }) => async dispatch => {
  try {
    dispatch({type: SAVING_AGENCY_PROFILE, payload: true});
    const res = await axios.post(
      `${baseUrl}/agency-profile/create`,
      {
        business_name,
        email,
        business_address,
        website,
        phone,
        documents
      },
      SupportHeader()
    );
    setTimeout(() => {
      dispatch({ type: SAVING_AGENCY_PROFILE, payload: false });
    }, 3000);
  } catch (error) {
    dispatch({ type: SAVING_AGENCY_PROFILE, payload: false });
    dispatch({ type: SET_AGENCY_ERRORS, payload: error });
  }
}