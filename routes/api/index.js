//LOCAL
const router = require('express').Router();

router.use('/movie',require('./movie.routes'))
router.use('/genres',require('./genres.routes'))
router.use('/actor',require('./actor.routes'))
router.use('/director',require('./director.routes'))
router.use('/reviewer',require('./reviewer.routes'))
router.use('/rating',require('./rating.routes'))
router.use('/movie_cast',require('./movie_cast.routes'))
router.use('/movie_direction',require('./movie_direction.routes'))
router.use('/movie_genres',require('./movie_genres.routes'))

module.exports = router;