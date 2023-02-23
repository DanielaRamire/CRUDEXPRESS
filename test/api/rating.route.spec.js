require('dotenv').config()
const request = require('supertest');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = require('../../app');
const Rating = require('../../models/rating.model');

describe('pruebas sobre la api de rating', ()=>{

    beforeAll(async ()=>{
        await mongoose.connect(process.env.MONGODB_URI);
    });

    afterAll(async ()=>{
        await mongoose.disconnect();
    });


    describe('GET /api/rating', ()=>{

        let response;
        beforeEach(async ()=>{
            response = await request(app).get('/api/rating').send();
        })


        it('la ruta funciona', async ()=>{
            expect(response.status).toBe(200);
            expect(response.header['content-type']).toContain('json');
        });

        it('Retornar array con todos los ratinges', async ()=>{
            expect(response.body).toBeInstanceOf(Array);
        });

    });
});