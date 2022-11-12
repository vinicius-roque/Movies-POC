import { Request, Response } from 'express';
import { connection } from '../database/db.js';
import { Movie } from '../protocol/movie.js';

async function createMovie(req: Request, res: Response) {
    const { name, streaming, genre, status } = req.body;

    try {
        await connection.query(
            'INSERT INTO movies (name, streaming, genre, status) VALUES ($1, $2, $3, $4);',
            [name, streaming, genre, status]
        );

        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function listMovies(req: Request, res: Response) {
    try {
        const movies: Movie[] = (await connection.query('SELECT * FROM movies;')).rows;

        return res.send(movies);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteMovie(req: Request, res: Response) {

}

export { createMovie, listMovies, deleteMovie };