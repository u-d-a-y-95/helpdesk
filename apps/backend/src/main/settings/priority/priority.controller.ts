import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PriorityService } from './priority.service';
import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('priorities')
@ApiTags('Priorities')
export class PriorityController {
  constructor(private readonly priorityService: PriorityService) {}

  @Post()
  createPriority(@Body() body: CreatePriorityDto) {
    return this.priorityService.create(body);
  }

  @Get()
  getAllPriorities() {
    return this.priorityService.find();
  }

  @Get(':id')
  getPriorityById(@Param('id') id: string) {
    return this.priorityService.findById(id);
  }

  @Put(':id')
  updatePriorityById(@Param('id') id: string, @Body() body: UpdatePriorityDto) {
    return this.priorityService.updateById(id, body);
  }

  @Delete(':id')
  deletePriorityById(@Param('id') id: string) {
    return this.priorityService.removeById(id);
  }
}
