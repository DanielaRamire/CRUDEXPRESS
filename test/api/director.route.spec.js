require('dotenv').config()
const request = require('supertest');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = require('../../app');
const Director = require('../../models/director.model');

describe('pruebas sobre la api de director', ()=>{

    beforeAll(async ()=>{
        await mongoose.connect(process.env.MONGODB_URI);
    });

    afterAll(async ()=>{
        await mongoose.disconnect();
    });


    describe('GET /api/director', ()=>{

        let response;
        beforeEach(async ()=>{
            response = await request(app).get('/api/director').send();
        })


        it('la ruta funciona', async ()=>{
            expect(response.status).toBe(200);
            expect(response.header['content-type']).toContain('json');
        });

        it('Retornar array con todos los directores', async ()=>{
            expect(response.body).toBeInstanceOf(Array);
        });

    });
});