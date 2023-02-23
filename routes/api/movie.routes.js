const express  = require('express');
const router = express.Router();
const Movie = require('../../models/movie.model');

router.get('/', async (req,res)=>{
    try {
        const movie = await Movie.find();
        res.json(movie);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error'});
    }
});

router.post('/', async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.json(newMovie);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error agregando'});
    }
});


router.delete('/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await Movie.findByIdAndDelete(movieId);
        res.json(movie);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error agregando'});
    }
});


router.put('/:movieId', async (req, res) => {
  try {

    const movieEdit = await Movie.findByIdAndUpdate(
        req.params.tripId,
        req.body,
        {
            new: true
        }
    );
    res.json(movieEdit);
    
  } catch (error) {
    res.status(500).json({error:'Ocurrió un error'});
  }
});



module.exports = router;