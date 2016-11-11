import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class App extends Component {
  render() {
    const landing = (
      <div>
        <SearchBar />
        <div className="landing">
        </div>
      </div>
    );
    return (
      <div>
        {this.props.children || landing}
      </div>
    );
  }
}
