import { AGENCIES, AGENCIES_LOADING, APPROVAL_PROCESSING } from '../types';

const initialState = {
  agencies: {},
  loading: false,
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case AGENCIES:
      return {
        ...state,
        agencies: action.payload.payload
      };
    case AGENCIES_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case APPROVAL_PROCESSING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};