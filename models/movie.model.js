const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movie = new Schema ({
    mov_id: { type:Number, required: true, unique: true },
    mov_title: {type:String, maxlength: 50,required: true},
    mov_year: {type:Number, required: true},
    mov_time: {type:Number, required: true},
    mov_lang: {type:String, maxlength: 50, required: true},
    mov_dt_rel: {type:Date, required: true},
    mov_rel_country: {type:String, maxlength: 15, required: true},
},
{
    timestamps:true
});

module.exports = mongoose.model('movie', movie);