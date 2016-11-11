import { FETCH_MOVIES, SEARCH_MOVIE, LOCATION_CHANGE, FILM_CHANGE } from '../actions/index';

const INITIAL_STATE = { all: [], searchTerm: '', location: '', film: '' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, all: action.payload };
    case SEARCH_MOVIE:
      return { ...state, searchTerm: action.payload };
    case LOCATION_CHANGE:
      return { ...state, location: action.payload };
    case FILM_CHANGE:
      return { ...state, film: action.payload };
    default:
      return state;
  }
}
