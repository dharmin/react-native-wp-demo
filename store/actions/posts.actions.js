import { GET_NEXT_SET_OF_POSTS } from '../types';

export const getNextPosts = ({ data: { posts } }) => (dispatch) => {
  dispatch({
    type: GET_NEXT_SET_OF_POSTS,
    payload: {
      posts
    }
  });

  return Promise.resolve(true);
};
