import axios from "axios";
import { SET_ERRORS, SET_PROPERTIES, PROPERTY_LOADING } from "../types";
import SupportHeader from "../../utils/SupportHeader";

  const initialState = {
    name: "",
    location: "",
    category_id: "",
    price: "",
    minPrice: "",
    maxPrice: ""
  };

export const getProperties = ({
  page = 0,
  queryParams = initialState
}) => async dispatch => {
  try {
    const { location, category_id, minPrice, maxPrice, name } = queryParams;
    dispatch({ type: PROPERTY_LOADING, payload: true });
    const res = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_URL}/property/search?skip=${page}&location=${location}&category_id=${category_id}&minPrice=${minPrice}&maxPrice=${maxPrice}&name=${name}`,
      SupportHeader()
    );
      console.log(res);
    dispatch({ type: SET_PROPERTIES, payload: res.data.payload });
    dispatch({ type: PROPERTY_LOADING, payload: false });
  } catch (err) {
    dispatch({ type: PROPERTY_LOADING, payload: false });
  }
};

export default getProperties;
