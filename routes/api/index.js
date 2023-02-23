//LOCAL
const router = require('express').Router();

router.use('/movie',require('./movie.routes'))
router.use('/genres',require('./genres.routes'))

module.exports = router;