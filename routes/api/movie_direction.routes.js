const express  = require('express');
const router = express.Router();
const Movie_direction = require('../../models/movie_direction.model');

router.get('/', async (req,res)=>{
    try {
        const movie_direction = await Movie_direction.find();
        res.json(movie_direction);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error'});
    }
});

router.post('/', async (req, res) => {
    try {
        const newMovie_direction = await Movie_direction.create(req.body);
        res.json(newMovie_direction);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error agregando'});
    }
});

module.exports = router;