import { ErrorCode } from './error-codes';

export default class ErrorWithCode extends Error {
  public code;

  constructor(code: ErrorCode, message: string) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorWithCode);
    }

    this.name = `Error ${code}`;
    this.code = code;
  }
}
