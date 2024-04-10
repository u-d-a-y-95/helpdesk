import { Global, Module } from '@nestjs/common';
import { BcryptService } from './bcrypt/bcrypt.service';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';

@Global()
@Module({
  providers: [
    BcryptService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
  exports: [BcryptService],
})
export class SharedModule {}
