const express  = require('express');
const router = express.Router();
const Movie_cast = require('../../models/movie_cast.model');

router.get('/', async (req,res)=>{
    try {
        const movie_cast = await Movie_cast.find();
        res.json(movie_cast);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error'});
    }
});

router.post('/', async (req, res) => {
    try {
        const newMovie_cast = await Movie_cast.create(req.body);
        res.json(newMovie_cast);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error agregando'});
    }
});

module.exports = router;