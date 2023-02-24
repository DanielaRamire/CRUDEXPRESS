const express  = require('express');
const router = express.Router();
const Movie_genres = require('../../models/movie_genres.model');

router.get('/', async (req,res)=>{
    try {
        const movie_genres = await Movie_genres.find();
        res.json(movie_genres);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error'});
    }
});

router.post('/', async (req, res) => {
    try {
        const newMovie_genres = await Movie_genres.create(req.body);
        res.json(newMovie_genres);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error agregando'});
    }
});

module.exports = router;