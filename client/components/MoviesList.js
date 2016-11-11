import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/index';
import SearchBar from './SearchBar';
import MovieEntry from './MovieEntry';
import sample from '../sampleData';

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  componentWillMount() {
    // this.props.fetchMovies().then(() => {
    //   const search = this.props.movies.searchTerm;
    //   function filterByName(obj) {
    //     if (search === '' || obj.title.startsWith(search)) {
    //       return true;
    //     }
    //     return false;
    //   }
    //   const list = this.props.movies.all
    //   .filter(filterByName)
    //   .map((elem, index) =>
    //     <MovieEntry movie={elem} key={index} />
    //   );
    //   this.setState({ list });
    // });
    // const list = sample
    // .filter(elem => elem.title === this.props.movies.film)
    // .map((elem, index) => <MovieEntry movie={elem} key={index} />);
    // this.setState({ list });
    // this.props.fetchMovies(this.props.movies.film).then(()=>{
    //   console.log("hinlm");
    // });
    // const list = this.props.movies.all
    // .map((elem, index) => <MovieEntry movie={elem} key={index} />);
  }
  render() {
    return (
      <div>
        <SearchBar />
        List of movies:
        <table>
          <thead>
            <tr>
              {/* <th>Actor 1</th> */}
              {/* <th>Director</th> */}
              <th>Locations</th>
              <th>Address</th>
              {/* <th>Release Year</th> */}
              <th>Title</th>
              {/* <th>Writer</th> */}
            </tr>
          </thead>
          <tbody>
            {this.props.movies.all
              .map((elem, index) => <MovieEntry movie={elem} key={index} />)}
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps({ movies }) {
  return { movies };
}
export default connect(mapStateToProps, { fetchMovies })(MoviesList);
