import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/base/base.service';
import { MemberEntity } from './entities/member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { BcryptService } from 'src/shared/bcrypt/bcrypt.service';

@Injectable()
export class MemberService extends BaseService<MemberEntity> {
  constructor(
    @InjectRepository(MemberEntity)
    private userRepository: Repository<MemberEntity>,
    private bcryptService: BcryptService,
  ) {
    super(userRepository);
  }

  async create(values: DeepPartial<MemberEntity>) {
    const { password } = values;
    const hashedPassword = await this.bcryptService.getHashed(password);
    return super.create({ ...values, password: hashedPassword });
  }
}
