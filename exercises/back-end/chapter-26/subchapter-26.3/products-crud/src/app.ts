import express, { Request, Response, NextFunction } from 'express';
import { ErrorMiddleware } from './middlewares';
import routes from './routes';

export const app = express();
const errorMiddleware = new ErrorMiddleware();

app.use(express.json());
app.use('/', routes);
app.use((error: any, req: Request, res: Response, next: NextFunction) =>
  errorMiddleware.handleError(error, req, res, next)
);

export default app;
