require('dotenv').config()
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

describe('pruebas sobre la api de movie', ()=>{

    beforeAll(async ()=>{
        await mongoose.connect(process.env.MONGODB_URI);
    });

    afterAll(async ()=>{
        await mongoose.disconnect();
    });


    describe('GET /api/movie', ()=>{

        let response;
        beforeEach(async ()=>{
            response = await request(app).get('/api/movie').send();
        })


        it('la ruta funciona', async ()=>{
            expect(response.status).toBe(200);
            expect(response.header['content-type']).toContain('json');
        });

        it('Retornar array con todas las películas', async ()=>{
            expect(response.body).toBeInstanceOf(Array);
        })

    });


});