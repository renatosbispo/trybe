import { Request, Router } from 'express';
import { ProductController } from '../controllers';
import { IProduct } from '../interfaces';
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
    '/not-expired',
    async (req, res, next) =>
      await productController.getNotExpired(req, res, next)
  )
  .get(
    '/search',
    async (
      req: Request<
        any,
        IProduct[],
        any,
        { minPrice: string; maxPrice: string }
      >,
      res,
      next
    ) => await productController.getInPriceRange(req, res, next)
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
