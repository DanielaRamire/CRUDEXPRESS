require('dotenv').config()
const request = require('supertest');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = require('../../app');
const Movie_direction = require('../../models/movie_direction.model');

describe('pruebas sobre la api de movie_direction', ()=>{

    beforeAll(async ()=>{
        await mongoose.connect(process.env.MONGODB_URI);
    });

    afterAll(async ()=>{
        await mongoose.disconnect();
    });


    describe('GET /api/movie_direction', ()=>{

        let response;
        beforeEach(async ()=>{
            response = await request(app).get('/api/movie_direction').send();
        })


        it('la ruta funciona', async ()=>{
            expect(response.status).toBe(200);
            expect(response.header['content-type']).toContain('json');
        });

        it('Retornar array con todos los movie_directiones', async ()=>{
            expect(response.body).toBeInstanceOf(Array);
        });

    });
});