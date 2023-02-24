require('dotenv').config()
const request = require('supertest');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = require('../../app');
const Movie = require('../../models/movie.model');

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

        const newMovie = { 
            mov_id: '1',
            mov_title: 'MoviePrueba',
            mov_year: '1994',
            mov_time: '120',
            mov_lang: 'ES',
            mov_dt_rel: '1994-01-15',
            mov_rel_country: 'PruebaPais',
        };

        

        let response;
        beforeEach(async () => {
            response = await request(app)
                .post('/api/movie')
                .send(newMovie);
        });

        afterEach(async ()=> {
            await Movie.deleteMany({mov_title: 'MoviePrueba'});
        });

        it('la ruta funciona', async () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        it('Se inserta correctamente', async () => {
            expect(response.body._id).toBeDefined();
            expect(response.body.mov_title).toBe(newMovie.mov_title);
        });
    });

    describe('DELETE /api/movie', ()=>{

        let movie;
        let response;
        beforeEach(async ()=>{
            movie = await Movie.create({mov_id: '1', mov_title: 'MoviePrueba', mov_year: '1994',
                mov_time: '120', mov_lang: 'ES', mov_dt_rel: '1994-01-15', mov_rel_country: 'PruebaPais',});

            response = await request(app).delete(`/api/movie/${movie._id}`).send();

        });

        afterEach(async ()=> {
            await Movie.deleteMany({mov_title: 'MoviePrueba'});
        });

        it('la ruta funciona', async () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        it('Borra Correctamente', async ()=> {
            expect(response.body._id).toBeDefined();
            const foundMovie = await Movie.findById(movie._id);
            expect(foundMovie).toBeNull();
        });
    });
    
    describe('PUT/api/movie', () => {

         let movie;
         beforeEach(async () => {
               tripe = await movie.create({ mov_title: 'test movie', 
               mov_year: '2028',
               mov_time: '30',
               mov_lang: '3',
               mov_dt_rel: '1996-01-15',
               mov_rel_country:'cali' });

         });



         afterEac(async () => {
            await movie.findByIdAndDelete(movie._id);
         });

         it('la ruta funciona', async () => {
            const response = await request(app).put('/api/movie/${trip._id}').send({

                name: 'movie updated'
            });

            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain(`json`);
         })


         it('se actualiza correctamente', async () => {
          

            const response = await request(app).put('/api/movie/${trip._id}').send({

                name: 'movie updated'
            });

            expect(response.body._id).toBeDefined();
            expect(response.body.name).toBe('movie updated');


         });



    });


});