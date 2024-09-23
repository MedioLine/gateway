import request from 'supertest';
import app from '../src/index';  // Assuming you're exporting app from index.ts

describe('Gateway Routes', () => {
  it('should proxy requests to /appointments', async () => {
    const res = await request(app).get('/appointments');
    expect(res.statusCode).toEqual(200);
    // Add more assertions based on your actual response
  });

  it('should proxy requests to /auth', async () => {
    const res = await request(app).post('/auth');
    expect(res.statusCode).toEqual(200);
  });

  // Add more tests for other routes
});
