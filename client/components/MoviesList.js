import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, getPoster } from '../actions/index';
import SearchBar from './SearchBar';
import MovieEntry from './MovieEntry';

class MoviesList extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div>
        <SearchBar />
        {
          this.props.movies.all
          .filter(movie => movie.title === this.props.movies.searchTerm.film && movie.address !== 'place not found')
          .map((elem, index) =>
            <MovieEntry
              movie={elem}
              key={index}
            />)
        }
      </div>
    );
  }
}
function mapStateToProps({ movies }) {
  return { movies };
}
export default connect(mapStateToProps, { fetchMovies, getPoster })(MoviesList);
