import {
  ADD_PROPERTY,
  PROPERTY_UPLOADING,
  PROPERTY_SERVER_UPLOAD_ERROR
} from "../types";

const initialState = {
  new_properties: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PROPERTY: {
      return {
        ...state,
        new_properties: action.payload
      };
    }
    case PROPERTY_UPLOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }
    case PROPERTY_SERVER_UPLOAD_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
