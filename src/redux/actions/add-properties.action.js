import axios from 'axios';

import SupportHeader from '../../utils/SupportHeader';
import { SET_CATEGORY, PROPERTY_UPLOADING } from '../types';

export const uploadProperty = propertyValues => async dispatch => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_ENDPOINT_URL}/property/create`,
      propertyValues,
      SupportHeader()
    );
    dispatch({ type: PROPERTY_UPLOADING, payload: true });
    setTimeout(() => {
      dispatch({ type: PROPERTY_UPLOADING, payload: false });
    }, 3000);
  } catch (error) {
    console.log(error);
  }
};

export const getPropertyCategories = () => async dispatch => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_ENDPOINT_URL}/category`, SupportHeader());
    const formatCategory = format(res.data.payload);
    dispatch({
      type: SET_CATEGORY,
      payload: formatCategory
    });
  } catch (error) {
    console.log(error);
  }
};

function format(category) {
  return category.reduce(
    (acc, curr) => [
      ...acc,
      {
        value: 'category_id',
        label: curr.name,
        id: curr.id
      }
    ],
    []
  );
}
