import express from 'express';
import { movieValidation } from '../middleware/movieMiddleware.js';
import { createMovie, listMovies, deleteMovie, updateMovie } from '../controller/movieController.js';
var router = express.Router();
router.post('/movies', movieValidation, createMovie);
router.get('/movies', listMovies);
router["delete"]('/movies/:id', deleteMovie);
router.put('/movies/:id', movieValidation, updateMovie);
export default router;
