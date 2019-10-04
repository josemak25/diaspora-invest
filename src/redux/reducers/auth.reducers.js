import { SET_CURRENT_USER, USER_LOADING, SET_ERRORS, SET_AUTHENTICATED, SET_NEW_USER, SET_UNAUTHENTICATED, CLEAR_ERRORS } from '../types';
import isEmpty from 'is-empty';
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  error: ''
};

export default function(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case SET_AUTHENTICATED:
      console.log(action.type);
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload.payload
      };
    case SET_NEW_USER:
      return {
        ...state,
        user: action.payload.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_ERRORS:
      return {
        ...state,
        error: action.payload.response.data.message
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: ""
      };
    default:
      return state;
  }
}
