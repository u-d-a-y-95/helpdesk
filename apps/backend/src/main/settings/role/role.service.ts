import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/base/base.service';
import { RoleEntity } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService extends BaseService<RoleEntity> {
  constructor(
    @InjectRepository(RoleEntity) roleRepository: Repository<RoleEntity>,
  ) {
    super(roleRepository);
  }
}
