const express  = require('express');
const router = express.Router();
const Rating = require('../../models/rating.model');

router.get('/', async (req,res)=>{
    try {
        const rating = await Rating.find();
        res.json(rating);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error'});
    }
});

module.exports = router;