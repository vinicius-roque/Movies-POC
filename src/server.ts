import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import movieRouter from './router/movieRouter.js';

dotenv.config();
const server = express();
server.use(express.json());
server.use(cors());

server.use(movieRouter);

server.listen(4000, () => console.log('Listening on port 4000!'));