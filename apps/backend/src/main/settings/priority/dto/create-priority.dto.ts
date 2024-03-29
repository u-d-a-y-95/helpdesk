import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePriorityDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
