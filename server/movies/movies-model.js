const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: String,
  release_year: Number,
  locations: String,
  fun_facts: String,
  production_company: String,
  distributor: String,
  director: String,
  writer: String,
  actor_1: String,
  actor_2: String,
  actor_3: String,
  address: String,
  geometry: {
    type: {
      type: String,
      required: true,
      enum: ['Point', 'LineString', 'Polygon'],
      default: 'Point',
    },
    coordinates: [Number],
  },
});

MovieSchema.index({ location: '2dsphere' });
module.exports = mongoose.model('Movies', MovieSchema);
