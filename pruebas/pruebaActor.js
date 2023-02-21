require('dotenv').config();

const mongoose = require('mongoose');
const actor = require('../models/actor');
mongoose.set('strictQuery', false);
(async ()=>{
    await mongoose.connect(process.env.MONGODB_URI);

    const newActor = await actor.create({
        act_id: '5f9a8b7e6d689c0017c4b4e2',
        act_fname: 'prueba actor',
        act_lname: 'prueba apellido',
        act_gender: 'M'
    });

    console.log(newActor);
})();

