import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { MemberModule } from './member/member.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [MemberModule, EmployeeModule, CustomerModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class UserModule {}
