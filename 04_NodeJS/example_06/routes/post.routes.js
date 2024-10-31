import express from 'express';
import {
  createPost,
  getAllPosts,
  getUserPosts,
} from '../controllers/post.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { postValidationRules } from '../validators/post.validator.js';
import validate from '../middlewares/validation.middleware.js';

const router = express.Router();

// Rutas de posts con validación de datos
router.post('/', authMiddleware, postValidationRules, validate, createPost);
router.get('/', getAllPosts);
router.get('/user', authMiddleware, getUserPosts);

export default router;
