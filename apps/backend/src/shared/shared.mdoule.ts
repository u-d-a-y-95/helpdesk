import { Global, Module } from '@nestjs/common';
import { BcryptService } from './bcrypt/bcrypt.service';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Global()
@Module({
  providers: [
    BcryptService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
  exports: [BcryptService],
})
export class SharedModule {}
