import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('status')
@ApiTags('Status')
@ApiBearerAuth()
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  create(@Body() body: CreateStatusDto) {
    return this.statusService.create(body);
  }

  @Get('/')
  getStatues() {
    return this.statusService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('test id');
    return this.statusService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateStatusDto) {
    return this.statusService.updateById(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusService.removeById(id);
  }
}
