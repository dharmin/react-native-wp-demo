import { SET_SEARCH_DATA } from '../types';

const initState = {
  query: '',
  cursor: '',
  hasPrevPage: false,
  posts: [],
  prevQueries: []
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_SEARCH_DATA: {
      const {
        query,
        nodes,
        pageInfo: { hasPreviousPage, endCursor }
      } = action.payload;

      return {
        ...state,
        query,
        prevQueries: [...state.prevQueries, query],
        hasPrevPage: hasPreviousPage,
        cursor: endCursor,
        posts: nodes
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
