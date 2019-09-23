import { INIT_QUERY } from '../types';

export const simpleAction = data => (dispatch) => {
  dispatch({
    type: INIT_QUERY,
    payload: {
      ...data
    }
  });
  return Promise.resolve(true);
};
