import { INIT_QUERY } from '../types';

const initState = {
  data: [],
  endCursor: '',
  nextPage: true
};

const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_QUERY: {
      const {
        posts: {
          edges,
          pageInfo: { endCursor, hasNextPage }
        }
      } = action.payload;

      return {
        ...state,
        data: edges,
        endCursor,
        nextPage: hasNextPage
      };
    }

    default:
      return state;
  }
};

export default newsReducer;
