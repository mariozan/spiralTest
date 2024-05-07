const request = require('supertest'); // Libreria para probar APIs

const app = require('../index.js'); // importando todas las rutas

/** Descripcion de la Prueba */
describe('GET /', () => {
    /** Descripcion especifica del caso a probar */
    it('responds with status 200', async () => {
        /** Simulando la solicitud HTTP */
        const response = await request(app).get('/');    
        /** Defino los valores esperados */    
        expect(response.status).toBe(200);
    })
    it('responds with test Hello world', async () => {
        const response = await request(app).get('/');        
        expect(response.text).toBe('Hello world');        
    })
})

describe('GET /spiral/:num', () => {
  test('Should return a snail style array for a number between 3 and 15', async () => {
    for (let num = 3; num <= 15; num++) {
      const response = await request(app).get(`/spiral/${num}`);
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body.matrix)).toBe(true);
      expect(response.body.matrix.length).toBe(num);
      for (let i = 0; i < num; i++) {
        expect(Array.isArray(response.body.matrix[i])).toBe(true);
        expect(response.body.matrix[i].length).toBe(num);
      }
    }
  });

  test('Should return an error for a number out of range', async () => {
    const response = await request(app).get('/spiral/2');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('El número debe ser un entero entre 3 y 15');
  });

});