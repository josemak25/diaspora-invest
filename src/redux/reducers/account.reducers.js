import { SET_AGENCY, AGENCY_LOADING, SET_AGENCY_ERRORS } from '../types';

const initialState = {
  agencyProfile: {},
  loading: false,
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
        loading: action.payload,
      };
    case SET_AGENCY_ERRORS:
      return {
        ...state,
        error: action.payload.response.data.message
      };
    default:
      return state;
  }
}
