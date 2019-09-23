import { INIT_QUERY } from '../types';

const initState = {
  data: [],
  endCursor: '',
  nextPage: false
};

const tagsReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_QUERY: {
      const {
        tags: {
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

export default tagsReducer;
