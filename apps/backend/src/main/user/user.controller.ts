import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Get()
  getAllUser() {
    return this.userService.find();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Patch(':id')
  updateUserById(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.updateById(id, body);
  }

  @Delete(':id')
  removeUserById(@Param('id') id: string) {
    return this.userService.removeById(id);
  }
}
