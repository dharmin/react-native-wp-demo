import { INIT_QUERY, SET_POSTS } from '../types';

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

    case SET_POSTS: {
      const { posts } = action.payload;
      return {
        ...state,
        data: posts.nodes
      };
    }

    default:
      return state;
  }
};

export default newsReducer;
