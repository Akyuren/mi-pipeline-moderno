
const request = require('supertest');
const app = require('./app');

describe('Pruebas de mi API', () => {
    
    // Prueba 1: Verificar que la ruta principal responde JSON
    test('GET / debe responder con un JSON y status 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body.estado).toBe("OK");
    });

    // Prueba 2: Verificar el Health Check
    test('GET /health debe responder Healthy', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Healthy');
    });
});
