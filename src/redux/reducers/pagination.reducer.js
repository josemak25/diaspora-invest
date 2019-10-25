import { NEXT_PROPERTIES, PREVIOUS_PROPERTIES } from '../types';

const PAGINATION_LIMIT = +process.env.REACT_APP_PAGINATION_NUMBER;

export default function paginationReducer(state, action) {
  switch (action.type) {
    case NEXT_PROPERTIES:
      return {
        ...state,
        paginate: action.payload.paginate + 1,
        properties: action.payload.properties.slice(
          action.payload.paginate * PAGINATION_LIMIT,
          action.payload.paginate * PAGINATION_LIMIT + PAGINATION_LIMIT
        )
      };
    case PREVIOUS_PROPERTIES:
      return action.payload.paginate === 0
        ? state
        : {
            ...state,
            paginate: action.payload.paginate - 1,
            properties: action.payload.properties.slice(
              action.payload.paginate * PAGINATION_LIMIT,
              action.payload.paginate * PAGINATION_LIMIT - PAGINATION_LIMIT
            )
          };
    default:
      return state;
  }
}
