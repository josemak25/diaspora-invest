import { SET_ERRORS, RESET } from '../types';
const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return action.payload;
    case RESET:
      return initialState;
    default:
      return state;
  }
}