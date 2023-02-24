const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewer = new Schema ({
    rev_id: { type: Number, required: true, unique: true },
    rev_name: {type:String, maxlength: 30},
},
{
    timestamps:true
});

module.exports = mongoose.model('reviewer', reviewer);