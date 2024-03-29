import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('departments')
@ApiTags('Departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  createDepartment(@Body() body: CreateDepartmentDto) {
    return this.departmentService.create(body);
  }

  @Get()
  getALlDepartments() {
    return this.departmentService.find();
  }

  @Get(':id')
  getDepartmentById(@Param('id') id: string) {
    return this.departmentService.findById(id);
  }

  @Patch(':id')
  updateDepartmentById(
    @Param('id') id: string,
    @Body() body: UpdateDepartmentDto,
  ) {
    return this.departmentService.updateById(id, body);
  }

  @Delete(':id')
  removeDepartmentById(@Param('id') id: string) {
    return this.departmentService.removeById(id);
  }
}
