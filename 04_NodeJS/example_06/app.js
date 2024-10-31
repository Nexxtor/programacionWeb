import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

export default app;
