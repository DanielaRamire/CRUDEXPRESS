require('dotenv').config();

const mongoose = require('mongoose');
const actor = require('../models/movie.model');
mongoose.set('strictQuery', false);
(async ()=>{
    await mongoose.connect(process.env.MONGODB_URI);

    const newActor = await actor.create({
        mov_id: '1',
        mov_title: 'Movie Prueba',
        mov_year: '1994',
        mov_time: '120',
        mov_lang: 'ES',
        mov_dt_rel: '1994-01-15',
        mov_rel_country: 'Prueba Pais',
    });

    console.log(newActor);
})();

