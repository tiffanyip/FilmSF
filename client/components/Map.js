import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/index';
import mapTheme from '../styles/mapTheme';

let map;
let markerData;
let markers = [];
let cachedMarkers = [];
let newBoundary = new google.maps.LatLngBounds();

class Map extends Component {
  constructor() {
    super();
    this.state = {
      bounds: null,
      center: { lat: 37.7788627, lng: -122.432101 },
      markerCenter: new google.maps.Marker(),
      list: [],
      infoWindow: new google.maps.InfoWindow(),
    };
    this.renderMarkers = this.renderMarkers.bind(this);
    this.renderInfoWindow = this.renderInfoWindow.bind(this);
  }

  componentWillMount() {
    this.props.fetchMovies();
  }

  componentDidMount() {
    //  set up map
    map = new google.maps.Map(this.map, {
      center: this.state.center,
      styles: mapTheme,
      zoom: 16,
    });
    //  set up marker in the center
    this.state.markerCenter.setOptions({
      position: this.state.center,
      map,
      icon: {
        url: '../assets/map_pin.png',
        scaledSize: new google.maps.Size(40, 40),
      },
    });
    google.maps.event.addListener(map, 'click', () => {
      this.state.infoWindow.close();
    });
    google.maps.event.addListener(map, 'idle', () => {
      //  remove cached markers
      cachedMarkers.forEach(marker => marker.setMap(null));
      cachedMarkers = [];

      //  store markers in cachedMarkers
      cachedMarkers = markers.slice();
      // clear markers
      markers = [];
      this.renderMarkers();
    });
  }

  componentDidUpdate() {
    newBoundary = new google.maps.LatLngBounds();

    // pin black marker to map center
    if (!this.props.movies.searchTerm.location || this.props.movies.searchTerm.location === '') {
      map.setCenter(this.state.center);
    } else {
      map.setCenter(this.props.movies.searchTerm.location);
    }
    this.state.markerCenter.setPosition(map.getCenter());

    //  delete old markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];
    this.renderMarkers();
    map.setZoom(14);
    // map.fitBounds(newBoundary);
  }

  renderMarkers() {
    //  filter result by film name
    if (this.props.movies.searchTerm.film !== '') {
      markerData = this.props.movies.all.filter(movie =>
        movie.title === this.props.movies.searchTerm.film);
    }
    //  generate markers & info windows
    markerData.forEach((movie) => {
      //  reset boundary
      if (movie.geometry.coordinates.length !== 0) {
        const coord = new google.maps.LatLng({
          lat: movie.geometry.coordinates[0],
          lng: movie.geometry.coordinates[1]
        });
        //  filter markers for the viewport
        if (map.getBounds().contains(coord)) {
          //  create new marker
          const marker = new google.maps.Marker({
            position: { lat: movie.geometry.coordinates[0], lng: movie.geometry.coordinates[1] },
            map,
            icon: {
              url: '../assets/map_pin_red.png',
              scaledSize: new google.maps.Size(40, 40),
            },
          });
          //  add infowindow for marker
          const content = this.renderInfoWindow(movie);
          marker.addListener('click', () => {
            this.state.infoWindow.setContent(content);
            this.state.infoWindow.open(map, marker);
          });
          newBoundary.extend(marker.position);
          markers.push(marker);
        }
      }
    });
  }

  renderInfoWindow(movie) {
    const actors = [movie.actor_1, movie.actor_2, movie.actor_3].filter(actor => actor !== undefined).join(', ');
    const content = `<div class="infowindow">
      <div class="infowindow-left">
        <img src=${this.props.movies.poster} />
      </div>
      <p>${movie.title}</p>
      <p>Year: ${movie.release_year}</p>
      <p>Address: ${movie.address}</p>
      <p>Actor: ${actors}</p>
      <p>Director: ${movie.director}</p>
    </div>`;
    return content;
  }

  render() {
    const mapStyle = {
      width: '100%',
      height: '100%',
    };
    return (
      <div style={{ width: '100%', height: '80vh' }}>
        <div
          id="map"
          ref={(c) => { this.map = c; }}
          style={mapStyle}
        >
          I should be a map!
        </div>
      </div>
    );
  }
}
function mapStateToProps({ movies }) {
  return { movies };
}
export default connect(mapStateToProps, { fetchMovies })(Map);
