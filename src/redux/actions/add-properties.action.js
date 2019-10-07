import axios from "axios";

import store from "../../redux/store";
import SupportHeader from "../../utils/SupportHeader";
import { SET_CATEGORY, SET_PROPERTIES, PROPERTY_LOADING } from "../types";



export const uploadProperty = propertyValues => async dispatch => {
  try {
    dispatch({type: PROPERTY_LOADING, payload: true})
    const res = await axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/property/create`, propertyValues, SupportHeader());
    console.log(res.data);
    dispatch({ type: PROPERTY_LOADING, payload: false });
  } catch (error) {
    console.log(error);
  }
}


export const getPropertyCategories = () => async dispatch => {
  try {
    const res = await axios.get('category', SupportHeader());
    const formatCategory = format(res.data.payload);
    dispatch({
      type: SET_CATEGORY,
      payload: formatCategory
    })
  } catch (error) {
    console.log(error);
  }
}

function format(category) {
  return category.reduce(((acc, curr) => ([...acc, {
    value: "category_id",
    label: curr.name,
    id: curr.id
  }])), []);
}

