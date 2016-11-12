import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { handleLocationChange, handleSearchSubmit, fetchMovies, getPoster } from '../actions/index';
import FilmSuggest from './FilmSuggest';
import NavBar from './NavBar';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { location: '' };
    this.submitSearch = this.submitSearch.bind(this);
  }
  componentDidMount() {
    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
    //  listener for autocomplete place changed
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      //  get places from search
      const place = autocomplete.getPlace();
      this.setState({ location: place.geometry.location });
      this.props.handleLocationChange(this.state.location);
    });
  }
  submitSearch(e) {
    e.preventDefault();
    this.props.handleSearchSubmit({
      film: this.props.movies.film,
      location: this.props.movies.location,
    });
    this.props.fetchMovies(this.props.movies.film);
    this.props.getPoster(this.props.movies.film);
    browserHistory.push('/map');
  }

  render() {
    return (
      <div className="search-bar">
        <NavBar />
        <div className="inner-bar">
          <div className="row">
            <div className="col s5">
              <FilmSuggest />
            </div>
            <div className="col s5">
              <input
                ref={(c) => { this.autocomplete = c; }}
                className="controls"
                type="text"
                placeholder="Enter a location"
                id="pac-input"
              />
            </div>
            <div className="col s2">
              <button className="mybutton" onClick={this.submitSearch}>
                <i className="fa fa-search fa3x" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}
export default connect(mapStateToProps, { handleLocationChange, handleSearchSubmit, fetchMovies, getPoster })(SearchBar);
