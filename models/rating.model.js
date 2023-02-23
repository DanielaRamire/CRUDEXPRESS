const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rating = new Schema ({
    mov_id: { type: Number },
    rev_id: { type: Number },
    rev_stars: {type:Number},
    num_o_ratings: {type:Number},
},
{
    timestamps:true
});

module.exports = mongoose.model('rating', rating);