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

        return res.status(200).send(movies);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteMovie(req: Request, res: Response) {
    const id: string = req.params.id;

    try {
        const movie: Movie = (await connection.query('SELECT movies.id, name, streaming, genre, status FROM movies WHERE movies.id = $1;', [id])).rows[0];

        if (!movie) {
            return res.status(404).send("This movie doesn't exists!");
        }

        await connection.query('DELETE FROM movies WHERE id = $1;', [id]);

        return res.sendStatus(202);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function updateWatchedMovie(req: Request, res: Response) {

}

export { createMovie, listMovies, deleteMovie, updateWatchedMovie };