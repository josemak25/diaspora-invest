export const paginationReducer = (state, action) => {
  switch (action) {
    case "next":
      return {
        ...state,
        paginate: state.paginate + 1,
        properties: properties.slice(
          state.paginate * 10,
          state.paginate * 10 + 10
        )
      };
    case "prev":
      return state.paginate === 0
        ? state
        : {
            ...state,
            paginate: state.paginate - 1,
            properties: properties.slice(
              state.paginate * 10,
              state.paginate * 10 - 10
            )
          };
    default:
      return state.paginate;
  }
};
