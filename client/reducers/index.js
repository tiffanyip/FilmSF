import { combineReducers } from 'redux';

import MoviesReducer from './reducer_movies';

const rootReducer = combineReducers({
  movies: MoviesReducer,
});

export default rootReducer;
