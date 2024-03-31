import { Module } from '@nestjs/common';
import { SettingsModule } from './settings/settings.module';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [SettingsModule, UserModule, TicketModule],
  providers: [],
})
export class MainModule {}
