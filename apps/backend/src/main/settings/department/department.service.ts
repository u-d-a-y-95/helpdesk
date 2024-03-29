import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentEntity } from './entities/department.entity';

@Injectable()
export class DepartmentService extends BaseService<DepartmentEntity> {
  constructor(
    @InjectRepository(DepartmentEntity)
    departmentRepository: Repository<DepartmentEntity>,
  ) {
    super(departmentRepository);
  }
}
