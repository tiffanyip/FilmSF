const axios = require('axios');

const Movies = require('./movies-model');

Movies.findOne({}, (err, collection) => {
  if (!collection) {
    axios
    .get('https://data.sfgov.org/resource/wwmu-gmzc.json')
    .then((response) => {
      const movieData = response.data;
      movieData.forEach(movie => movie.address = '');
      Movies.insertMany(movieData, (err, docs) => {
        if (err)
          console.log("err", err);
      });
    });
  }
});
