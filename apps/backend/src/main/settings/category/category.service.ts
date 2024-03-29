import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/base/base.service';
import { CategoryEntity } from './entity/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService extends BaseService<CategoryEntity> {
  constructor(
    @InjectRepository(CategoryEntity)
    categoryRepository: Repository<CategoryEntity>,
  ) {
    super(categoryRepository);
  }
}
