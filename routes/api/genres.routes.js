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

module.exports = router;