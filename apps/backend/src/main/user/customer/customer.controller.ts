import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('customers')
@ApiTags('Customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  createCustomer(@Body() body: CreateCustomerDto) {
    return this.customerService.createCustomer(body);
  }

  @Get()
  getAllCustomers() {
    return this.customerService.find();
  }

  @Get(':id')
  getCustomerById(@Param('id') id: string) {
    return this.customerService.findById(id);
  }

  @Patch(':id')
  updateCustomerById(@Param('id') id: string, @Body() body: UpdateCustomerDto) {
    return this.customerService.updateById(id, body);
  }

  @Delete(':id')
  deleteCustomerById(@Param('id') id: string) {
    return this.customerService.removeById(id);
  }
}
