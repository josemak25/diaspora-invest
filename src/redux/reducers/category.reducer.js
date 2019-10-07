import {
  SET_CATEGORY
} from "../types";

const initialState = {
  categories: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY: {
      return {
        ...state, 
        categories: action.payload
      };
    }
    default:
      return state;
  }
}
