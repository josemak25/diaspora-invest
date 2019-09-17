import { SET_CURRENT_USER, USER_LOADING, GET_ERRORS } from '../pages/login-signup/constants/types';
import isEmpty from 'is-empty';
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  error: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload.payload,
        token: action.payload.token
      };
    case USER_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
