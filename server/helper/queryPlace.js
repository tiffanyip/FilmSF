const Movies = require('../movies/movies-model');
const googleMapsClient = require('@google/maps').createClient({
  Promise,
  key: 'AIzaSyDUGUfARxfriiF-wpfQ0OgjQlk1C6UAjro',
});

const queryPlaceDetail = (placeid, entry) => {
  googleMapsClient.place({ placeid })
  .asPromise()
  .then((result) => {
    if (result.json.result.geometry) {
      Movies.update({ _id: entry._id }, {
        geometry: {
          type: 'Point',
          coordinates:
          [result.json.result.geometry.location.lat,
          result.json.result.geometry.location.lng],
        },
        address: result.json.result.formatted_address || 'address not found',
      }).exec();
    } else {
      Movies.update({ _id: entry._id }, {
        geometry: {
          type: 'Point',
          coordinates: [],
        },
        address: result.json.result.formatted_address || 'address not found',
      }).exec();
    }
  });
};

module.exports = {
  queryPlace: (entry) => {
    googleMapsClient.placesAutoComplete({
      input: entry.locations,
      //  restrict search results near San Francisco
      location: [37.7749, -122.4194],
      radius: 10000,
      components: { country: 'us' },
    })
    .asPromise()
    .then((result) => {
      if (result.json.predictions.length === 0 || !result.json.predictions[0].place_id) {
        //  recurse here
        Movies.update({ _id: entry._id }, { address: 'place not found' }).exec();
      } else {
        queryPlaceDetail(result.json.predictions[0].place_id, entry);
      }
    });
  },
};
