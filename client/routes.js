import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MoviesList from './components/MoviesList';
import SearchResult from './components/SearchResult';

export default (
  <Route path="/" component={App}>
    <Route path="/movies" component={MoviesList} />
    <Route path="/map" component={SearchResult} />
  </Route>
);
