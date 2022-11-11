import express from 'express';
import { movieValidation } from '../middleware/movieMiddleware.js';
import { createMovie } from '../controller/movieController.js';

const router = express.Router();

router.post('/movie', movieValidation, createMovie);

export default router;