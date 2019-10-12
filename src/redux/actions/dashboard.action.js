import axios from "axios";

import SupportHeader from "../../utils/SupportHeader";

import { AGENCIES, AGENCIES_LOADING, APPROVAL_PROCESSING } from "../types";


export const getAgencies = () => async dispatch => {
  try {
    dispatch({type: AGENCIES_LOADING, payload: true});
    const res = await axios.get(`${process.env.REACT_APP_ENDPOINT_URL}/agency-profile/get-all`, SupportHeader());
    dispatch({ type: AGENCIES, payload: res.data });
    localStorage.setItem(`agencies`, JSON.stringify(res.data.payload));
    dispatch({ type: AGENCIES_LOADING, payload: false });
  } catch (error) {
    dispatch({ type: AGENCIES_LOADING, payload: false });
    console.log(error);
  }
}

export const agenciesApproval = ({ id, action }) => async dispatch => {
  try {
    dispatch({ type: APPROVAL_PROCESSING, payload: true });
    const res = await axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/agency-profile/approval`, { id, action }, SupportHeader());
    console.log(res);
    dispatch({ type: APPROVAL_PROCESSING, payload: false });
  } catch (error) {
    dispatch({ type: APPROVAL_PROCESSING, payload: false });
  }
}