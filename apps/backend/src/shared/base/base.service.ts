import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { BaseEntity } from './base.entity';
import { NotFoundException } from '@nestjs/common';

export class BaseService<T extends BaseEntity> {
  constructor(private repository: Repository<T>) {}

  private createInstance(values) {
    return this.repository.create(values);
  }

  async create(values: DeepPartial<T>) {
    const instance = this.createInstance(values);
    const row = await this.repository.save(instance);
    return row;
  }

  find() {
    return this.repository.find();
  }

  async findById(id: string) {
    const record = await this.repository.findOneBy({
      id,
    } as FindOptionsWhere<T>);
    if (!record) throw new NotFoundException();
    return record;
  }

  async updateById(id: string, values: DeepPartial<T>) {
    const oldRecord = await this.findById(id);
    const instance = this.createInstance({
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
