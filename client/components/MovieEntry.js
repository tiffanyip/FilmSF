import React, { Component } from 'react';
import { connect } from 'react-redux';

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
function getDistance(p1, p2) {
  //  Haversine formula
  const lat1 = p1.lat;
  const lon1 = p1.lng;
  const lat2 = p2.lat;
  const lon2 = p2.lng;
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);  // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c * 0.621371; // Distance in miles
  return d.toFixed(2);
}

class MovieEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movie,
    };
  }
  render() {
    const actors = [this.state.movie.actor_1, this.state.movie.actor_2, this.state.movie.actor_3].filter(actor => actor !== undefined).join(', ');
    const p1 = { lat: this.state.movie.geometry.coordinates[0], lng: this.state.movie.geometry.coordinates[1] };
    const p2 = { lat: this.props.movies.location.lat, lng: this.props.movies.location.lng };
    return (
      <div className="movie-entry">
        <div className="col s5">
          <div className="card horizontal">
            <div className="card-image">
              <img src={this.props.movies.poster} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <strong>{this.state.movie.title}</strong>
                <p>Address: {this.state.movie.address}</p>
                <p>Director: {this.state.movie.director}</p>
                <p>Year: {this.state.movie.release_year}</p>
                <p>Actors:{actors}</p>
                <p>Distace: {getDistance(p1, p2)} miles</p>
                {/* <p>{this.state.movie.writer}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default MovieEntry;
function mapStateToProps({ movies }) {
  return { movies };
}
export default connect(mapStateToProps, null)(MovieEntry);
