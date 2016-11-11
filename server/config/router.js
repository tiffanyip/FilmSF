const express = require('express');
const moviesCtrl = require('../movies/movies-ctrl');

const router = new express.Router();

router.get('/movies', moviesCtrl.getMovieList);
router.post('/movies', moviesCtrl.addMovieEntry);
module.exports = router;
