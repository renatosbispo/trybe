import { Request, Response, NextFunction } from 'express';
import { ErrorCode } from '../lib/error-codes';

export default class ErrorMiddleware {
  private getHttpResponseStatuCode(
    errorCode: ErrorCode | undefined
  ): number | null {
    if (!errorCode) {
      return null;
    }

    const httpResponseStatusCodes = {
      [ErrorCode.ENTITY_ALREADY_EXISTS]: 409,
      [ErrorCode.ENTITY_NOT_FOUND]: 404,
      [ErrorCode.ENTITY_PROPERTY_INVALID]: 400,
      [ErrorCode.ENTITY_PROPERTY_MISSING]: 400,
      [ErrorCode.ENTITY_PROPERTY_NOT_FOUND]: 400,
      [ErrorCode.ENTITY_PROPERTY_UNEXPECTED]: 400,
      [ErrorCode.QUERY_INVALID]: 400,
      [ErrorCode.TOKEN_EXPIRED_OR_INVALID]: 401,
      [ErrorCode.TOKEN_NOT_FOUND]: 401,
      [ErrorCode.UNAUTHORIZED_OPERATION]: 401,
    };

    return httpResponseStatusCodes[errorCode];
  }

  private isInHttpResponseStatusCodeRange(codeNumber: number): boolean {
    return codeNumber > 399 && codeNumber < 600;
  }

  public handleError(
    error: any,
    _req: Request,
    res: Response,
    _next: NextFunction
  ): void {
    const { message } = error;
    const { code } = error;

    const statusCode = this.getHttpResponseStatuCode(code) || error.statusCode;

    if (
      Number.isInteger(Number(statusCode)) &&
      this.isInHttpResponseStatusCodeRange(statusCode)
    ) {
      res.status(statusCode).json({ message });
    } else {
      res.status(500).json({ message });
    }
  }
}
