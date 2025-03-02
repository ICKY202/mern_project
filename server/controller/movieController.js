const Movie = require('../model/movieModel');

exports.addMovie = async (req, res) => {
    try {
        const newMovie = new Movie({
            movieName: req.body.title,
            description: req.body.description,
            duration: req.body.duration,
            genre: req.body.genre,
            language: req.body.Language,
            releaseDate: req.body.releaseDate,
            poster: req.body.poster});

        const movie = newMovie.save();

        res.status(201).send({success: true, data: movie});
    }catch(err) {
        res.send({success: false, message: err.message});
    }
}

exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        console.log(movies);
        res.status(200).send({success: true, message: "All Movies has been fetched", data: movies});
    }catch(err) {
        res.send({success: false, message: err.message});
    }
}
exports.updateMovie = async (req, res) => {
    try {
        await Movie.findByIdAndUpdate(req.body.movieId, req.body);
        res.status(204).send({success: true, message: "Movie has been updated"});
    }catch(err) {
        res.status(501).send({success: false, message: err.message});
    }
}
exports.deleteMovie = async (req, res) => {
    console.log(req.params);
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.status(204).json({success: true, message: "Movie has been deleted"});
    }catch(err) {
        res.send({success: false, message: err.message});
    }
}
