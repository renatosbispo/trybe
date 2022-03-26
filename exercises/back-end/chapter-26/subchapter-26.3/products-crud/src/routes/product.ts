import { Router } from 'express';
import { ProductController } from '../controllers';
import { ProductMiddlewares } from '../middlewares';

const router = Router();

const productController = new ProductController();
const productMiddlewares = new ProductMiddlewares();

router
  .delete(
    '/:id',
    async (req, res, next) => await productController.remove(req, res, next)
  )
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
  )
  .put(
    '/:id',
    (req, res, next) => productMiddlewares.validateProperties(req, res, next),
    async (req, res, next) => await productController.update(req, res, next)
  );

export default router;
