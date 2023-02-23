require('dotenv').config()
const request = require('supertest');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = require('../../app');
const Movie_genres = require('../../models/movie_genres.model');

describe('pruebas sobre la api de movie_genres', ()=>{

    beforeAll(async ()=>{
        await mongoose.connect(process.env.MONGODB_URI);
    });

    afterAll(async ()=>{
        await mongoose.disconnect();
    });


    describe('GET /api/movie_genres', ()=>{

        let response;
        beforeEach(async ()=>{
            response = await request(app).get('/api/movie_genres').send();
        })


        it('la ruta funciona', async ()=>{
            expect(response.status).toBe(200);
            expect(response.header['content-type']).toContain('json');
        });

        it('Retornar array con todos los movie_genreses', async ()=>{
            expect(response.body).toBeInstanceOf(Array);
        });

    });
});