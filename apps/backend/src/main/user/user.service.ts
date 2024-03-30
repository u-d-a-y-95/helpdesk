import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/base/base.service';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { BcryptService } from 'src/shared/bcrypt/bcrypt.service';

@Injectable()
export class UserService extends BaseService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private bcryptService: BcryptService,
  ) {
    super(userRepository);
  }

  async create(values: DeepPartial<UserEntity>) {
    const { password } = values;
    const hashedPassword = await this.bcryptService.getHashed(password);
    return super.create({ ...values, password: hashedPassword });
  }
}
