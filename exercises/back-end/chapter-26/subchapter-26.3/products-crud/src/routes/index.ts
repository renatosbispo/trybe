import { Router } from 'express';
import productRouter from './product';

const router = Router();

router.use('/product', productRouter);

export default router;
