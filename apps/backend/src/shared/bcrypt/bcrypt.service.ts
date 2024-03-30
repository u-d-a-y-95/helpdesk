import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { hash } from 'bcrypt';
@Injectable()
export class BcryptService {
  constructor(private configService: ConfigService) {}

  getHashed(
    value: string,
    saltRound: number = this.configService.get<number>('SALT_ROUND'),
  ) {
    return hash(value, saltRound);
  }
}
