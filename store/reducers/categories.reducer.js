import { INIT_QUERY } from '../types';

const initState = {
  data: [],
  endCursor: '',
  nextPage: false
};

const categoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_QUERY: {
      const {
        categories: {
          edges,
          pageInfo: { endCursor, hasNextPage }
        }
      } = action.payload;

      return {
        data: edges,
        endCursor,
        nextPage: hasNextPage
      };
    }
    default:
      return state;
  }
};

export default categoriesReducer;
