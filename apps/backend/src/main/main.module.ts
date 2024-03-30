import { Module } from '@nestjs/common';
import { SettingsModule } from './settings/settings.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SettingsModule, UserModule],
  providers: [],
})
export class MainModule {}
