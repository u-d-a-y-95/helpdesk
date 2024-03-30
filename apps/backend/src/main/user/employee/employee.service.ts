import { Injectable } from '@nestjs/common';

import { BaseService } from 'src/shared/base/base.service';
import { EmployeeEntity } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { MemberService } from '../member/member.service';

@Injectable()
export class EmployeeService extends BaseService<EmployeeEntity> {
  constructor(
    @InjectRepository(EmployeeEntity)
    private employeeRepository: Repository<EmployeeEntity>,
    private memberService: MemberService,
  ) {
    super(employeeRepository);
  }
  async createEmployee(values: CreateEmployeeDto) {
    const { email, ...rest } = values;
    // generate random default password
    const password = '1234';
    const user = await this.memberService.create({ email, password });

    const payload = {
      ...rest,
      userId: user.id,
    };
    return super.create(payload);
  }
}
