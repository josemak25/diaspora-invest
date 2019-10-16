import {
  SET_BOOKMARKED_PROPERTIES,
  BOOKMARKED_PROPERTIES_LOADING,
  SAVING_BOOKMARKED_PROPERTY,
  SET_BOOKMARKED_PROPERTIES_ERRORS
} from "../types";

const initialState = {
  bookmarkedProperties: [],
  loading: false,
  saving: false,
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKMARKED_PROPERTIES:
      return {
        ...state,
        bookmarkedProperties: action.payload
      };
    case BOOKMARKED_PROPERTIES_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SAVING_BOOKMARKED_PROPERTY:
      return {
        ...state,
        saving: action.payload
      }
    case SET_BOOKMARKED_PROPERTIES_ERRORS:
      return {
        ...state,
        error: action.payload.response.data.message
      };
    default:
      return state;
  }
}

