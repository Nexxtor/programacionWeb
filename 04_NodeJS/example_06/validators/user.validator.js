import { body } from 'express-validator';

// Validación para el registro de usuario
export const userRegisterValidationRules = [
  body('username').isString().notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('A valid email is required'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

// Validación para el login de usuario
export const userLoginValidationRules = [
  body('email').isEmail().withMessage('A valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
];
