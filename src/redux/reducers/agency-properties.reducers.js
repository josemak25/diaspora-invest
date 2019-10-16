import {
  SET_AGENCY_PROPERTIES,
  AGENCY_PROPERTIES_LOADING,
  SET_AGENCY_PROPERTIES_ERRORS,
  RESET
} from "../types";

const initialState = {
  agencyProperties: [],
  loading: false,
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AGENCY_PROPERTIES:
      return {
        ...state,
        agencyProperties: action.payload
      };
    case AGENCY_PROPERTIES_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_AGENCY_PROPERTIES_ERRORS:
      return {
        ...state,
        error: action.payload.response.data.message
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
}

