const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movie = new Schema ({
    mov_id: { type: Schema.Types.ObjectId, required: true, unique: true },
    mov_title: {type:String, maxlength: 50},
    mov_year: {type:Number},
    mov_time: {type:Number},
    mov_lang: {type:String, maxlength: 50},
    mov_dt_rel: {type:Date},
    mov_rel_country: {type:String, maxlength: 5},
},
{
    timestamps:true
});

module.exports = mongoose.model('movie', movie);