import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './entities/employee.entity';
import { MemberModule } from '../member/member.module';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity]), MemberModule],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
