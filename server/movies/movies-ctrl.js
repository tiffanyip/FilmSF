const Movies = require('./movies-model');
const googleMapsClient = require('@google/maps').createClient({
  Promise,
  key: 'AIzaSyDUGUfARxfriiF-wpfQ0OgjQlk1C6UAjro',
});

module.exports = {
  getMovieList: (request, response) => {
    Movies.find((err, data) => {
      if (err) {
        throw err;
      }
      response.status(200).send(data);
    });
  },

  addMovieEntry: (request, response) => {
    new Movies({ title: 'hi' })
    .save()
    .then(() => {
      response.status(200).send('added');
    });
  },
};
