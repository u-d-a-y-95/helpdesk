import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('tickets')
@ApiTags('Tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  create(@Body() body: CreateTicketDto) {
    return this.ticketService.create(body);
  }

  @Get()
  getAllTickets() {
    return this.ticketService.find();
  }

  @Get(':id')
  getTicketById(@Param('id') id: string) {
    return this.ticketService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateTicketDto) {
    return this.ticketService.updateById(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.removeById(id);
  }
}
