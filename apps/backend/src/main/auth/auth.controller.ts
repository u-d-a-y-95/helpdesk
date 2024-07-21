import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { SigninDto } from './entities/signin.dto';
import { Public } from './decorators/public.decorator';
import { ValidDto } from './entities/valid.dto';

@Public()
@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  signin(@Body() body: SigninDto) {
    return this.authService.signin(body);
  }

  @Post('/isvalid')
  @HttpCode(HttpStatus.OK)
  isvalid(@Body() body: ValidDto) {
    return this.authService.isValid(body.token);
  }
}
