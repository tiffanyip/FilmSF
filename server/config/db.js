const mongoose = require('mongoose');
const moment = require('moment');

const db = mongoose.connection;
const init = require('../movies/init');

mongoose.connect('mongodb://movieadmin:moviepw@ds047792.mlab.com:47792/sfmovie');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`[ ${moment().format('hh:mm:ss')} ] Database connected`);
});
module.exports = db;
