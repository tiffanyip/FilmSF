import React, { Component } from 'react';

class MovieEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movie,
      address: '',
    };
  }
  componentWillMount() {
  }
  render() {
    return (
      <tr>
        {/* <td>{movie.actor_1}</td> */}
        {/* <td>{movie.director}</td> */}
        <td>{this.state.movie.locations}</td>
        <td>{this.state.movie.address}</td>
        {/* <td>{movie.release_year}</td> */}
        <td>{this.state.movie.title}</td>
        {/* <td>{movie.writer}</td> */}
      </tr>
    );
  }


}

export default MovieEntry;
