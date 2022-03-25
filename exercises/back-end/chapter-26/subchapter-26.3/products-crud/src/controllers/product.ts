import { StatusCodes } from 'http-status-codes';
import { ProductService } from '../services';

export default class ProductController {
  public async exampleMethod(_req: any, res: any) {
    res.status(StatusCodes.NOT_IMPLEMENTED).end();
  }
}
