import { Module } from '@nestjs/common';
import { SettingsModule } from './settings/settings.module';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SettingsModule, UserModule, TicketModule, AuthModule],
  providers: [],
})
export class MainModule {}
