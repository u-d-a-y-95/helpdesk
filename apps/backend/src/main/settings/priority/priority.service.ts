import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/base/base.service';
import { PriorityEntity } from './entities/priority.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PriorityService extends BaseService<PriorityEntity> {
  constructor(
    @InjectRepository(PriorityEntity)
    priorityRepository: Repository<PriorityEntity>,
  ) {
    super(priorityRepository);
  }
}
