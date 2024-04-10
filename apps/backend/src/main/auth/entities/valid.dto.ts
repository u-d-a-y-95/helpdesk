import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ValidDto {
  @ApiProperty()
  @IsNotEmpty()
  token: string;
}
