import { SET_ERRORS, SET_PROPERTIES, PROPERTY_LOADING } from '../types';

const initialState = {
  properties: [],
  loading: false,
  error: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PROPERTIES:
      return {
        ...state, 
        properties: action.payload
      }
    case PROPERTY_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SET_ERRORS:
      return {
        ...state,
        error: action.payload
      }
    default: 
      return state;
  }
}

