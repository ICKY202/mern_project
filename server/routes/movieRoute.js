const movieRouter = require('express').Router();
const Movie = require("../model/movieModel");
const {addMovie, updateMovie, deleteMovie, getAllMovies} = require('../controller/movieController');


movieRouter.post('/add-movie', addMovie);

movieRouter.get('/get-movies', getAllMovies);

movieRouter.put('/update-movie', updateMovie);

movieRouter.delete('/delete-movie/:id', deleteMovie);


module.exports = movieRouter;