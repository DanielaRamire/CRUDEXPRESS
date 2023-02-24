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

    describe('POST /api/director', () => {
        const newDirector = { 
            dir_id: '1',
            dir_fname: 'DirectorPrueba',
            dir_lname: 'Apellido Prueba',
        };

        let response;
        beforeEach(async () => {
            response = await request(app)
                .post('/api/director')
                .send(newDirector);
        });

        afterEach(async ()=> {
            await Director.deleteMany({dir_fname: 'DirectorPrueba'});
        });

        it('la ruta funciona', async () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        it('Se inserta correctamente', async () => {
            expect(response.body._id).toBeDefined();
            expect(response.body.dir_fname).toBe(newDirector.dir_fname);
        });
    });

    
});