const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movie_direction = new Schema ({
    act_id: {type: Number},
    mov_id: {type: Number},
    role: {type:String, maxlength: 20},
},
{
    timestamps:true
});

module.exports = mongoose.model('movie_direction', movie_direction);