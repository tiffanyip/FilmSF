import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movie,
    };
  }
  componentWillMount() {
    // this.props.getPoster(this.props.movie.title);
  }
  render() {
    const actors = [this.state.movie.actor_1, this.state.movie.actor_2, this.state.movie.actor_3].filter(actor => actor !== undefined).join(', ');
    return (
      <div className="movie-entry">
        <div className="col s5">
          <div className="card horizontal">
            <div className="card-image">
              <img src={this.props.movies.poster} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4>{this.state.movie.title}</h4>
                <p>Location: {this.state.movie.locations}</p>
                <p>Address: {this.state.movie.address}</p>
                <p>Director: {this.state.movie.director}</p>
                <p>Year: {this.state.movie.release_year}</p>
                <p>Actors:{actors}</p>
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
