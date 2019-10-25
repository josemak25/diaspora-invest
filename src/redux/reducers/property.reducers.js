import { SET_ERRORS, SET_PROPERTIES, PROPERTY_LOADING, SET_TOTAL_PROPERTIES, SET_TOTAL_PAGES } from '../types';

const initialState = {
  properties: [],
  loading: false,
  count: 0,
  totalPages: 0,
  error: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PROPERTIES:
      return {
        ...state,
        properties: action.payload
      };
    case SET_TOTAL_PROPERTIES:
      return {
        ...state,
        count: action.payload
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      };
    case PROPERTY_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_ERRORS:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
