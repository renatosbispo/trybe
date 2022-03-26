import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { IProduct } from '../interfaces';
import { ErrorCode } from '../lib/error-codes';
import ErrorWithCode from '../lib/error-with-code';

export default class ProductMiddlewares {
  private getErrorCode(errorType: string): ErrorCode {
    const errorTypeEnding = errorType.split('.')[1];

    const errorCode =
      errorTypeEnding === 'required'
        ? ErrorCode.ENTITY_PROPERTY_MISSING
        : ErrorCode.ENTITY_PROPERTY_INVALID;

    return errorCode;
  }

  public validateProperties(
    req: Request<any, IProduct, IProduct>,
    _res: Response,
    next: NextFunction
  ) {
    try {
      const { name, brand, price, productionDate, expirationDate } = req.body;

      const productSchema = Joi.object({
        name: Joi.string().required().label('name'),
        brand: Joi.string().min(3).required().label('brand'),
        price: Joi.number().required().label('price'),
        productionDate: Joi.date().required().label('productionDate'),
        expirationDate: Joi.date().required().label('expirationDate'),
      });

      const { error } = productSchema.validate({
        name,
        brand,
        price,
        productionDate,
        expirationDate,
      });

      if (error) {
        const { type, message } = error.details[0];
        const code = this.getErrorCode(type);

        throw new ErrorWithCode(code, message);
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}
