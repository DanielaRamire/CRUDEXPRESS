const express  = require('express');
const router = express.Router();
const Reviewer = require('../../models/reviewer.model');

router.get('/', async (req,res)=>{
    try {
        const reviewer = await Reviewer.find();
        res.json(reviewer);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error'});
    }
});

router.post('/', async (req, res) => {
    try {
        const newReviewer = await Reviewer.create(req.body);
        res.json(newReviewer);
    } catch (error) {
        res.status(500).json({error:'Ocurrió un error agregando'});
    }
});

module.exports = router;