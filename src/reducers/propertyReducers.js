import { SET_ERRORS, SET_PROPERTIES, PROPERTY_LOADING } from '../pages/properties/property-types';
import isEmpty from 'is-empty';
import { tsRestType } from '@babel/types';

const initialState = {
  properties: [],
  loading: false,
  error: {}
}

export default function(state = initialState, action) {
  switch (action.types) {
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

