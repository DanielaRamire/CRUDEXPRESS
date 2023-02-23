require('dotenv').config()
const request = require('supertest');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = require('../../app');
const Movie_cast = require('../../models/movie_cast.model');

describe('pruebas sobre la api de movie_cast', ()=>{

    beforeAll(async ()=>{
        await mongoose.connect(process.env.MONGODB_URI);
    });

    afterAll(async ()=>{
        await mongoose.disconnect();
    });


    describe('GET /api/movie_cast', ()=>{

        let response;
        beforeEach(async ()=>{
            response = await request(app).get('/api/movie_cast').send();
        })


        it('la ruta funciona', async ()=>{
            expect(response.status).toBe(200);
            expect(response.header['content-type']).toContain('json');
        });

        it('Retornar array con todos los movie_castes', async ()=>{
            expect(response.body).toBeInstanceOf(Array);
        });

    });
});