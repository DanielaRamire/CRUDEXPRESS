require('dotenv').config()
const request = require('supertest');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = require('../../app');
const Reviewer = require('../../models/reviewer.model');

describe('pruebas sobre la api de reviewer', ()=>{

    beforeAll(async ()=>{
        await mongoose.connect(process.env.MONGODB_URI);
    });

    afterAll(async ()=>{
        await mongoose.disconnect();
    });


    describe('GET /api/reviewer', ()=>{

        let response;
        beforeEach(async ()=>{
            response = await request(app).get('/api/reviewer').send();
        })


        it('la ruta funciona', async ()=>{
            expect(response.status).toBe(200);
            expect(response.header['content-type']).toContain('json');
        });

        it('Retornar array con todos los revieweres', async ()=>{
            expect(response.body).toBeInstanceOf(Array);
        });

    });
});