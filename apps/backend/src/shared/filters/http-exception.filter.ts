import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const res = exception.getResponse() as { message: string };
    const status = exception.getStatus();
    console.log(res);

    response.status(status).json({
      message: res.message || '',
      statusCode: status,
      data: null,
    });
  }
}
