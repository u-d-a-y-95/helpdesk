import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiPropertyOptional()
  @IsDate()
  @IsOptional()
  dob: Date;
}
