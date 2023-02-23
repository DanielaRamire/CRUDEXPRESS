const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actor = new Schema ({
    act_id: { type:Number, required: true, unique: true },
    act_fname: {type:String, maxlength: 20},
    act_lname: {type:String, maxlength: 20},
    act_gender: {type:String, maxlength: 1},
},
{
    timestamps:true
});

module.exports = mongoose.model('actor', actor);