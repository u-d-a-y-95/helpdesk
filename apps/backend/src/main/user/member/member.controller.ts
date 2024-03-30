import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('members')
@ApiTags('Members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  createUser(@Body() body: CreateMemberDto) {
    return this.memberService.create(body);
  }

  @Get()
  getAllUser() {
    return this.memberService.find();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.memberService.findById(id);
  }

  @Patch(':id')
  updateUserById(@Param('id') id: string, @Body() body: UpdateMemberDto) {
    return this.memberService.updateById(id, body);
  }

  @Delete(':id')
  removeUserById(@Param('id') id: string) {
    return this.memberService.removeById(id);
  }
}
