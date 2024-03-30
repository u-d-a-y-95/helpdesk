import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { NotFoundException } from '@nestjs/common';

export class BaseService<T extends BaseEntity> {
  constructor(private repository: Repository<T>) {}

  private async createInstance(values): Promise<any> {
    const instance = await this.repository.create(values);
    return instance;
  }

  async create(values: DeepPartial<T>) {
    const instance: T = await this.createInstance(values);
    const row = await this.repository.save(instance);
    return row;
  }

  find(options: FindManyOptions<T> = {}) {
    return this.repository.find(options);
  }

  async findById(id: string, options: Omit<FindOneOptions<T>, 'where'> = {}) {
    const record = await this.repository.findOne({
      where: { id },
      ...options,
    } as FindOneOptions<T>);
    if (!record) throw new NotFoundException();
    return record;
  }

  async updateById(id: string, values: DeepPartial<T>) {
    const oldRecord = await this.findById(id);
    const instance = await this.createInstance({
      id,
      ...values,
    });
    const record = await this.repository.save(instance);
    return Object.assign(oldRecord, record);
  }

  async removeById(id: string) {
    const record = await this.findById(id);
    await this.repository.delete({ id } as FindOptionsWhere<T>);
    return record;
  }
}
