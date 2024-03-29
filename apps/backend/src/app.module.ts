import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.mdoule';

@Module({
  imports: [ConfigModule, MainModule, SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
