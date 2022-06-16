const request = require('supertest');
const app = require('../index');

    describe('GET /', () => {
        it('should return "Hello World!"', () => {
            return request(app)
                .get('/')
                .expect('<h1>Hello World!</h1>')
        });
    });

    describe('POST /api/notes', () => {
        it('should return json {"error":"content missing"}, if request body is missing', () => {
            return request(app)
                .post('/api/notes')
                .expect('{"error":"content missing"}')
        });
    });

    describe('GET /api/notes', () => {
        it('should return 200', () => {
            return request(app)
                .get('/api/notes')
                .expect(200)
        });
    });

    describe('GET /api/notes/:id', () => {
        it('should return 200 and should return data of id 3', () => {
            return request(app)
                .get('/api/notes/3')
                .expect(200)
                .expect('Content-Type',/json/)
                .expect('{"id":3,"content":"GET and POST are the most important methods of HTTP protocol","date":"2022-01-10T19:20:14.298Z","important":true}')
        });
    });