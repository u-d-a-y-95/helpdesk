import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStatusDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
