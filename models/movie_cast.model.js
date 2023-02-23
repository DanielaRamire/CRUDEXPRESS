const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movie_cast = new Schema ({
    dir_id: {type: Number},
    mov_id: {type: Number},
},
{
    timestamps:true
});

module.exports = mongoose.model('movie_cast', movie_cast);