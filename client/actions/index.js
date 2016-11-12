import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const LOCATION_CHANGE = 'LOCATION_CHANGE';
export const FILM_CHANGE = 'FILM_CHANGE';
export const GET_POSTER = 'GET_POSTER';

export function fetchMovies() {
  return (dispatch) => {
    return axios.get('/api/movies')
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

export function getPoster(query) {
  return (dispatch) => {
    return axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: '6c97985248aa4e9f18d6c3d6e7671ebb',
        query,
      }
    })
    .then(response => {
      const path = `http://image.tmdb.org/t/p/w500/${response.data.results[0].poster_path}`;
      dispatch({ type: GET_POSTER, payload: path });
    });
  };
}
