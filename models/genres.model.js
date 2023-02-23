const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genres = new Schema ({
    gen_id: { type: Schema.Types.ObjectId, required: true, unique: true },
    gen_title: {type:String, maxlength: 20},
},
{
    timestamps:true
});

module.exports = mongoose.model('genres', genres);