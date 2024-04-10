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
    private memberRepository: Repository<MemberEntity>,
    private bcryptService: BcryptService,
  ) {
    super(memberRepository);
  }

  async create(values: DeepPartial<MemberEntity>) {
    const { password } = values;
    const hashedPassword = await this.bcryptService.getHashed(password);
    return super.create({ ...values, password: hashedPassword });
  }

  async findByEmail(email: string) {
    return this.memberRepository.findOne({ where: { email } });
  }
}
