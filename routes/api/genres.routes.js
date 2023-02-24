const express  = require('express');
const router = express.Router();
const Genre = require('../../models/genres.model');

router.get('/', async (req,res)=>{
    try {
        const genre = await Genre.find();
        res.json(genre);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error'});
    }
});

router.post('/', async (req, res) => {
    try {
        const newGenre = await Genre.create(req.body);
        res.json(newGenre);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error agregando'});
    }
});

module.exports = router;