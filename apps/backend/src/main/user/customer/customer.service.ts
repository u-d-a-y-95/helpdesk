import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { BaseService } from 'src/shared/base/base.service';
import { CustomerEntity } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberService } from '../member/member.service';

@Injectable()
export class CustomerService extends BaseService<CustomerEntity> {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
    private memberService: MemberService,
  ) {
    super(customerRepository);
  }

  async createCustomer(values: CreateCustomerDto) {
    const { email, password, ...rest } = values;
    const member = await this.memberService.create({
      email,
      password,
    });

    const payload = {
      ...rest,
      userId: member.id,
    };
    return super.create(payload);
  }
}
