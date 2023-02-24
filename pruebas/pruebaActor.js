require('dotenv').config();

const mongoose = require('mongoose');
const actor = require('../models/actor.model');
mongoose.set('strictQuery', false);
(async ()=>{
    await mongoose.connect(process.env.MONGODB_URI);

    const newActor = await actor.create({
        act_id: '1',
        act_fname: 'prueba actor',
        act_lname: 'prueba apellido',
        act_gender: 'M'
    });

    console.log(newActor);
})();

