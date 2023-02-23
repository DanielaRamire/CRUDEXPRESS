const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movie_genres = new Schema ({
    mov_id: {type: Number},
    gen_id: {type: Number},
},
{
    timestamps:true
});

module.exports = mongoose.model('movie_genres', movie_genres);