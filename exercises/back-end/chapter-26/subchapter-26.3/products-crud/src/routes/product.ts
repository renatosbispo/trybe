import { Router } from 'express';
import { ProductController } from '../controllers';
import { ProductMiddlewares } from '../middlewares';

const router = Router();

const productController = new ProductController();
const productMiddlewares = new ProductMiddlewares();

router
  .get(
    '/',
    async (req, res, next) => await productController.getAll(req, res, next)
  )
  .get(
    '/:id',
    async (req, res, next) => await productController.getById(req, res, next)
  )
  .post(
    '/',
    (req, res, next) => productMiddlewares.validateProperties(req, res, next),
    async (req, res, next) => await productController.create(req, res, next)
  );

export default router;
