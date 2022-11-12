import { Request, Response } from 'express';
import { connection } from '../database/db.js';

async function createMovie(req: Request, res: Response) {
    const { name, streaming, genre, status } = req.body;

    try {
        await connection.query(
            'INSERT INTO movies (name, streaming, genre, status) VALUES ($1, $2, $3, $4);',
            [name, streaming, genre, status]
        );

        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}

export { createMovie };