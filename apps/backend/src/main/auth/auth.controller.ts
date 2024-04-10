import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { SigninDto } from './entities/signin.dto';
import { Public } from './decorators/public.decorator';

@Public()
@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  signin(@Body() body: SigninDto) {
    return this.authService.signin(body);
  }
}
