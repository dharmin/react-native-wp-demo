import { INIT_QUERY, SET_POSTS, GET_NEXT_SET_OF_POSTS } from '../types';

const initState = {
  data: [],
  endCursor: '',
  nextPage: false
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

    case GET_NEXT_SET_OF_POSTS: {
      const {
        posts: {
          edges,
          pageInfo: { endCursor, hasNextPage }
        }
      } = action.payload;

      return {
        ...state,
        data: [...state.data, ...edges],
        endCursor,
        nextPage: hasNextPage
      };
    }

    default:
      return state;
  }
};

export default newsReducer;
