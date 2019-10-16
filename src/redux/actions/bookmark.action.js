import axios from "axios";
import SupportHeader from "../../utils/SupportHeader";
import {
  SAVING_BOOKMARKED_PROPERTY,
  SET_BOOKMARKED_PROPERTIES_ERRORS
} from "../types";

const baseURL = process.env.REACT_APP_ENDPOINT_URL;

export const bookmarkProperty = ({
  property_id
}) => async dispatch => {
  try {
    dispatch({ type: SAVING_BOOKMARKED_PROPERTY, payload: true});

    await axios.post(`${baseURL}/save-property`, { property_id }, SupportHeader());
    dispatch({ type: SAVING_BOOKMARKED_PROPERTY, payload: false });
  } catch (error) {
    dispatch({ type: SAVING_BOOKMARKED_PROPERTY, payload: false });

    dispatch({ type: SET_BOOKMARKED_PROPERTIES_ERRORS, payload: error }); 
  }
};

