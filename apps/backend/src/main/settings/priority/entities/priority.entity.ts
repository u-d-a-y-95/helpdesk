import { TicketEntity } from 'src/main/ticket/entities/ticket.entity';
import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'priority' })
export class PriorityEntity extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @OneToMany(() => TicketEntity, (ticket) => ticket.priority)
  tickets: TicketEntity[];
}
