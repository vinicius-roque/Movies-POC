import express from 'express';
import { createMovie } from './controllers/movieController.js';

const server = express();

server.get('/oi', (req, res) => {
    res.send("Ok");
});

server.post('/movie', createMovie);

server.listen(4000, () => { console.log('Listening on port 4000!') });