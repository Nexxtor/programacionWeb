import express from 'express';
import { register, login } from '../controllers/user.controller.js';
import {
  userLoginValidationRules,
  userRegisterValidationRules,
} from '../validators/user.validator.js';
import validate from '../middlewares/validation.middleware.js';

const router = express.Router();

// Ruta de registro con validación de datos
router.post('/register', userRegisterValidationRules, validate, register);
router.post('/login', userLoginValidationRules, validate, login);

export default router;
