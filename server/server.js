const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const db = require('./config/db');
const router = require('./config/router');
// const worker = require('./worker/fetchLatLng');

const app = express();

app.use(bodyParser.json());
app.use(express.static('./client'));
app.use(morgan('dev'));
app.use(cors());
app.use('/api', router);
app.use('/client', express.static('./node_modules'));
app.get('/*', (request, response) => response.sendFile(path.resolve('./', 'client', 'index.html')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});


module.exports = app;
