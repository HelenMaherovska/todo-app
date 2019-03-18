import { FILTERS } from "../constants";

const initState = FILTERS.ALL;

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "FILTER_TODO":
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
