import request from 'supertest';
import app from '../app.js';
import mongoose from 'mongoose';
import { connectToDatabase, disconnectFromDatabase } from '../config/database.js';

// Conectar a la base de datos antes de todos los tests
beforeAll(async () => {
  await connectToDatabase();
});

// Limpiar la base de datos y desconectarla después de todos los tests
afterAll(async () => {
  await mongoose.connection.db.dropDatabase(); // Limpia la base de datos
  await disconnectFromDatabase(); // Desconecta la base de datos
});

describe('User API', () => {
  describe('POST /api/users/register', () => {
    it('should register a user successfully', async () => {
      const res = await request(app).post('/api/users/register').send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123',
      });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('message', 'User registered successfully');
    });

    it('should return validation errors for invalid data', async () => {
      const res = await request(app).post('/api/users/register').send({
        username: '',
        email: 'invalid-email',
        password: '123',
      });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('errors');
      expect(res.body.errors).toHaveLength(3); // Ajustar según las validaciones
    });
  });

  describe('POST /api/users/login', () => {
    it('should login a user successfully', async () => {
      // Primero, registrar al usuario para garantizar que existe en la base de datos
      await request(app).post('/api/users/register').send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123',
      });

      const res = await request(app).post('/api/users/login').send({
        email: 'testuser@example.com',
        password: 'password123',
      });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('token'); // Verifica que se devuelve un token al hacer login correctamente
    });

    it('should return validation errors for invalid login data', async () => {
      const res = await request(app).post('/api/users/login').send({
        email: '',
        password: '',
      });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('errors');
      expect(res.body.errors).toHaveLength(2); // Ajustar según las reglas de validación
    });
  });
});
