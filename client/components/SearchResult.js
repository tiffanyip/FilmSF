import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import Map from './Map';

class SearchResult extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <Map />
      </div>
    );
  }

}

function mapStateToProps({ movies }) {
  return { movies };
}
export default connect(mapStateToProps, null)(SearchResult);
