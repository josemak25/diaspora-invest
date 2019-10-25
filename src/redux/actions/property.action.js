import axios from 'axios';
import {
  SET_ERRORS,
  SET_BOOKMARKED_PROPERTIES,
  BOOKMARKED_PROPERTIES_LOADING,
  SET_PROPERTIES,
  PROPERTY_LOADING,
  SET_AGENCY_PROPERTIES,
  AGENCY_PROPERTIES_LOADING,
  SET_AGENCY_PROPERTIES_ERRORS,
  SET_TOTAL_PROPERTIES,
  SET_TOTAL_PAGES
} from '../types';
import SupportHeader from '../../utils/SupportHeader';

const baseURL = process.env.REACT_APP_ENDPOINT_URL;

const initialState = {
  name: '',
  location: '',
  category_id: '',
  price: '',
  minPrice: '',
  maxPrice: ''
};

export const getProperties = ({ page = 0, queryParams = initialState }) => async dispatch => {
  try {
    const { location, category_id, minPrice, maxPrice, name } = queryParams;
    dispatch({ type: PROPERTY_LOADING, payload: true });
    const res = await axios.get(
      `${baseURL}/property/search?skip=${page}&location=${location}&category_id=${category_id}&minPrice=${minPrice}&maxPrice=${maxPrice}&name=${name}`,
      SupportHeader()
    );

    dispatch({ type: SET_PROPERTIES, payload: res.data.payload.properties });
    dispatch({ type: SET_TOTAL_PROPERTIES, payload: res.data.payload.count });
    dispatch({ type: SET_TOTAL_PAGES, payload: res.data.payload.totalPages });
    dispatch({ type: PROPERTY_LOADING, payload: false });
  } catch (err) {
    dispatch({ type: PROPERTY_LOADING, payload: false });
  }
};

export const getAgencyProperties = () => async dispatch => {
  try {
    dispatch({ type: AGENCY_PROPERTIES_LOADING, payload: true });
    const res = await axios.get(`${baseURL}/property/agency-property`, SupportHeader());

    dispatch({ type: SET_AGENCY_PROPERTIES, payload: res.data.payload });
    dispatch({ type: AGENCY_PROPERTIES_LOADING, payload: false });
  } catch (err) {
    dispatch({ type: AGENCY_PROPERTIES_LOADING, payload: false });
    dispatch({ type: SET_AGENCY_PROPERTIES_ERRORS, payload: err });
  }
};

export const getSavedProperties = () => async dispatch => {
  try {
    dispatch({ type: BOOKMARKED_PROPERTIES_LOADING, payload: true });

    const res = await axios.get(`${baseURL}/save-property`, SupportHeader());

    dispatch({ type: SET_BOOKMARKED_PROPERTIES, payload: res.data.payload });
    dispatch({ type: BOOKMARKED_PROPERTIES_LOADING, payload: false });
  } catch (error) {
    dispatch({ type: BOOKMARKED_PROPERTIES_LOADING, payload: false });
  }
};

export default getProperties;
