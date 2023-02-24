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


router.post('/', (req, res) => {
    const movie = Movie(req.body);
    movie
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country } = req.body;
    Movie
        .updateOne({mov_id: id}, {$set: {mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

// router.post('/', async (req, res) => {
//     try {
//         const newMovie = await Movie.create(req.body);
//         res.json(newMovie);
//     } catch (error) {
//         res.status(500).json({error:'Ocurrió un error agregando'});
//     }
// });


// router.delete('/:movieId', async (req, res) => {
//     const movieId = req.params.movieId;
//     try {
//         const movie = await Movie.findByIdAndDelete(movieId);
//         res.json(movie);
//     } catch (error) {
//         res.status(500).json({error:'Ocurrió un error eliminando'});
//     }
// });

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Movie.deleteOne({ mov_id: id });
        if (result.deletedCount === 0) {
        res.status(404).json({ message: 'No se encontró el usuario' });
        } else {
        res.status(200).json({ message: 'El usuario ha sido eliminado' });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

module.exports = router;