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
        });

    });


    describe('POST /api/movie', () => {

        const newMovie = { mov_id: '2',
            mov_title: 'test movie', 
            mov_year: '2023',
            mov_time: '30',
            mov_lang: '3',
            mov_dt_rel: '1994-01-15',
            mov_rel_country:'ciudad'
         };

        it('la ruta funciona', async () => {
              const response = await request(app).post('/api/movie').send(newMovie);

              expect(response.status).toBe(200);
              expect(response.headers['content-type']).toContain('json');
        });

        it('Se inserta correctamente', async () => {
            const response = await request(app).post('/api/movie').send(newMovie);
            

            expect(response.body.mov_id).toBeDefined();
            expect(response.body.mov_title).toBe(newMovie.mov_title);
        });

    });


});