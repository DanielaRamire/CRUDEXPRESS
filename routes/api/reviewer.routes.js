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

module.exports = router;