import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BooksRoutes from './routes/books.routes';

const app: express.Application = express();
const PORT = 8000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(BooksRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});