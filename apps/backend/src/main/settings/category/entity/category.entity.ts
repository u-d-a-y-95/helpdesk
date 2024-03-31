import { TicketEntity } from 'src/main/ticket/entities/ticket.entity';
import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'category' })
export class CategoryEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => TicketEntity, (ticket) => ticket.category)
  tickets: TicketEntity[];
}
