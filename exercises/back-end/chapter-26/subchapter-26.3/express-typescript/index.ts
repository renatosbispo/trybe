import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

const PORT = 8000;

app.get('/', (_req, res) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});