import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './entities/customer.entity';
import { MemberModule } from '../member/member.module';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity]), MemberModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
