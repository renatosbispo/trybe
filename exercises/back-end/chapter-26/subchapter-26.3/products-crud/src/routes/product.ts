import { Router } from 'express';
import { ProductController } from '../controllers';

const router = Router();

const productController = new ProductController();

router.get(
  '/',
  async (req, res) => await productController.exampleMethod(req, res)
);

export default router;
