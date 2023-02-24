const express  = require('express');
const router = express.Router();
const Director = require('../../models/director.model');

router.get('/', async (req,res)=>{
    try {
        const director = await Director.find();
        res.json(director);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error'});
    }
});

router.post('/', async (req, res) => {
    try {
        const newDirector = await Director.create(req.body);
        res.json(newDirector);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error agregando'});
    }
});

module.exports = router;