import { combineReducers } from 'redux';
import categoriesReducer from './categories.reducer';
import tagsReducer from './tags.reducer';
import newsReducer from './news.reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  tags: tagsReducer,
  news: newsReducer
});

export default rootReducer;
