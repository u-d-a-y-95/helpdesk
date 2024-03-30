import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEmployeeDto {
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

  @ApiPropertyOptional()
  @IsDate()
  @IsOptional()
  dob: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  roleId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  departmentId: string;
}
