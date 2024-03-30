import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  //   IsStrongPassword,
} from 'class-validator';

export class CreateMemberDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  //   @IsStrongPassword()
  @IsNotEmpty()
  @IsString()
  password: string;
}
