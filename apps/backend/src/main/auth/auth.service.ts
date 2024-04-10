import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MemberService } from '../user/member/member.service';
import { SigninDto } from './entities/signin.dto';
import { BcryptService } from 'src/shared/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private memberService: MemberService,
    private bcryptService: BcryptService,
    private jwtService: JwtService,
  ) {}
  async signin(values: SigninDto) {
    const { email, password } = values;
    const member = await this.memberService.findByEmail(email);
    if (!member) throw new UnauthorizedException();

    const { password: hashedPassword, ...res } = member;
    const isValid = await this.bcryptService.isMatched(
      password,
      hashedPassword,
    );
    if (!isValid) throw new UnauthorizedException();

    const token = await this.jwtService.signAsync(res);
    return {
      token,
    };
  }
}
