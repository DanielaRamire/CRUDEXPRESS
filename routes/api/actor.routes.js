const express  = require('express');
const router = express.Router();
const Actor = require('../../models/actor.model');

router.get('/', async (req,res)=>{
    try {
        const actor = await Actor.find();
        res.json(actor);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error'});
    }
});

router.post('/', async (req, res) => {
    try {
        const newActor = await Actor.create(req.body);
        res.json(newActor);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error agregando'});
    }
});

module.exports = router;