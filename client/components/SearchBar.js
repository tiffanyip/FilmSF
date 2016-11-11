import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { handleLocationChange, handleSearchSubmit, fetchMovies } from '../actions/index';
import FilmSuggest from './FilmSuggest';
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
    browserHistory.push('/map');
  }
  render() {
    return (
      <div className="search-bar">
        <h4>
          <img
            src="../video-camera.png"
            height="50px"
            width="50px"
            onClick={() => { browserHistory.push('/'); }}
          ></img>
          Film SF
        </h4>
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
                id="first_name"
              />
            </div>
            <div className="col s2 search-button">
              <a className="mybutton" onClick={this.submitSearch}>
                <i className="fa fa-search fa3x" aria-hidden="true"></i>
              </a>
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
export default connect(mapStateToProps, { handleLocationChange, handleSearchSubmit, fetchMovies })(SearchBar);
