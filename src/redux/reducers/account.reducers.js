import {
  SET_AGENCY,
  AGENCY_LOADING,
  SET_AGENCY_ERRORS,
  RESET,
  SAVING_AGENCY_PROFILE,
  HAS_AGENCY
} from "../types";

const initialState = {
  agencyProfile: {},
  loading: false,
  hasAgency: false,
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AGENCY:
      return {
        ...state,
        agencyProfile: action.payload.payload
      };
    case AGENCY_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_AGENCY_ERRORS:
      return {
        ...state,
        error: action.payload.response.data.message
      };
    case HAS_AGENCY:
      return {
        ...state,
        hasAgency: true
      };
    case SAVING_AGENCY_PROFILE:
      return {
        ...state,
        loading: action.payload
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
