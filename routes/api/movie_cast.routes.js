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

module.exports = router;