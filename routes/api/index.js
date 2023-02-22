//LOCAL
const router = require('express').Router();

router.use('/movie',require('./movie.routes'))

module.exports = router;