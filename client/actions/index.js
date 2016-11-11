import axios from 'axios';
import { browserHistory } from 'react-router';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const LOCATION_CHANGE = 'LOCATION_CHANGE';
export const FILM_CHANGE = 'FILM_CHANGE';


export function fetchMovies() {
  return (dispatch) => {
    return axios.get('http://localhost:8080/api/movies')
    .then(response => {
      dispatch({ type: FETCH_MOVIES, payload: response.data });
    });
  };
}

export function handleSearchSubmit(data) {
  return (dispatch) => {
    return dispatch({ type: SEARCH_MOVIE, payload: data });
  };
}

export function handleLocationChange(location) {
  return (dispatch) => {
    return dispatch({ type: LOCATION_CHANGE, payload: location });
  };
}

export function handleFilmChange(name) {
  return (dispatch) => {
    return dispatch({ type: FILM_CHANGE, payload: name });
  };
}
