import * as userService from '../services/user.service.js';
import { UserAlreadyExistsError, InvalidCredentialsError } from '../errors/errors.js';

// Registro de usuario
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const result = await userService.registerUser({
      username,
      email,
      password,
    });

    res.status(201).json({ message: 'User registered successfully', result });
  } catch (error) {
    // Detecta errores de clave duplicada en MongoDB
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      const value = error.keyValue[field];
      return res.status(400).json({
        message: `The ${field} '${value}' is already in use.`,
      });
    }

    // Maneja la excepción personalizada para usuario ya existente
    if (error instanceof UserAlreadyExistsError) {
      return res.status(400).json({ message: error.message });
    }

    // Maneja otros errores internos del servidor
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Login de usuario
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await userService.loginUser({ email, password });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    // Maneja la excepción personalizada para credenciales inválidas
    if (error instanceof InvalidCredentialsError) {
      return res.status(400).json({ message: error.message });
    }

    // Maneja otros errores internos del servidor
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};
