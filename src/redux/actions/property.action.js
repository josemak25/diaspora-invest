import axios from 'axios';
import { SET_ERRORS, SET_PROPERTIES, PROPERTY_LOADING } from '../types';
import SupportHeader from '../../utils/SupportHeader';



export const getProperties = () => async dispatch => {
  try {
    dispatch({ type: PROPERTY_LOADING, payload: true });
    const res = await axios.get('property/search', SupportHeader());
    console.log(res.data);
    dispatch({ type: SET_PROPERTIES, payload: res.data.payload });
    dispatch({ type: PROPERTY_LOADING, payload: false });
  } catch (err) {
    dispatch({ type: SET_ERRORS, payload: err });
    dispatch({ type: PROPERTY_LOADING, payload: false });
  }
}

export default getProperties;