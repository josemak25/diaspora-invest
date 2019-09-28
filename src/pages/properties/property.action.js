import axios from 'axios';
import { SET_ERRORS, SET_PROPERTIES, PROPERTY_LOADING } from '../properties/property-types';
import SupportHeader from '../../utils/SupportHeader';

export const fetchingProperties = payload => {
  return {
    type: SET_PROPERTIES,
    payload
  }
} 

export const propertiesLoading = payload => {
  return {
    type: PROPERTY_LOADING,
    payload
  }
}

export const error = payload => {
  return {
    type: SET_ERRORS,
    payload
  }
}


export const getProperties = (setProperties, setErrors) => async dispatch => {
  try {
    const res = axios.get('property/search', SupportHeader());
    console.log(res);
    debugger
  } catch (err) {
    dispatch(error(err));
    dispatch(propertiesLoading(false))
    setErrors(err);
  }
}

export default getProperties;