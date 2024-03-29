import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dtos/createRole.dto';
import { RoleService } from './role.service';
import { UpdateRoleDto } from './dtos/updateRole.dto';

@Controller('roles')
@ApiTags('Roles')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  async createRole(@Body() body: CreateRoleDto) {
    return this.roleService.create(body);
  }
  @Get()
  async getAllRole() {
    return this.roleService.find();
  }

  @Get(':id')
  async getRoleById(@Param('id') id: string) {
    return this.roleService.findById(id);
  }

  @Put(':id')
  async updateRoleById(@Param('id') id: string, @Body() body: UpdateRoleDto) {
    return this.roleService.updateById(id, body);
  }

  @Delete(':id')
  async deleteRoleById(@Param('id') id: string) {
    return this.roleService.removeById(id);
  }
}
