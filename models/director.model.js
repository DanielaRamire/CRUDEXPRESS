const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const director = new Schema ({
    dir_id: { type:Number, required: true, unique: true },
    dir_fname: {type:String, maxlength: 20},
    dir_lname: {type:String, maxlength: 20},
},
{
    timestamps:true
});

module.exports = mongoose.model('director', director);