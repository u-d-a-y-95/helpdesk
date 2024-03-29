import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/base/base.service';
import { StatusEntity } from './entities/status.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService extends BaseService<StatusEntity> {
  constructor(
    @InjectRepository(StatusEntity) statusRepository: Repository<StatusEntity>,
  ) {
    super(statusRepository);
  }
}
