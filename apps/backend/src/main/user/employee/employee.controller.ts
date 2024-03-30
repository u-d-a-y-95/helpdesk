import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('employees')
@ApiTags('Employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  createEmployee(@Body() body: CreateEmployeeDto) {
    return this.employeeService.createEmployee(body);
  }

  @Get()
  getAllEmployees() {
    return this.employeeService.find({
      relations: {
        role: true,
        department: true,
      },
    });
  }

  @Get(':id')
  getEmployeeById(@Param('id') id: string) {
    return this.employeeService.findById(id, {
      relations: { department: true, role: true },
    });
  }

  @Patch(':id')
  updateEmployeeById(@Param('id') id: string, @Body() body: UpdateEmployeeDto) {
    return this.employeeService.updateById(id, body);
  }

  @Delete(':id')
  removeEmployeeById(@Param('id') id: string) {
    return this.employeeService.removeById(id);
  }
}
