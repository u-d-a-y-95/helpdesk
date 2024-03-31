import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTicketDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  categoryId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  departmentId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  priorityId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  statusId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  requesterId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  creatorId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  assignerId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  assigneeId: string;
}
