import { Reflector } from '@nestjs/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { METADATA_RESPONSE_MESSAGE } from '@/constants';

@Injectable()
class ResponseMappingInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {
    //
  }

  responseHandler(data: unknown, context: ExecutionContext) {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();

    const code = response.statusCode;
    const message =
      this.reflector.get<string>(
        METADATA_RESPONSE_MESSAGE,
        context.getHandler(),
      ) || 'success';

    return {
      code,
      data,
      message,
    };
  }

  errorHandler(err: HttpException, context: ExecutionContext) {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();
    const messages =
      (err?.getResponse?.() as any)?.message ??
      err.message ??
      'Internal Server Error';
    const status =
      err instanceof HttpException
        ? err.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status);

    response.json({
      status,
      messages,
    });
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: unknown) => this.responseHandler(data, context)),
      catchError((err: HttpException) =>
        throwError(() => this.errorHandler(err, context)),
      ),
    );
  }
}

export { ResponseMappingInterceptor };
