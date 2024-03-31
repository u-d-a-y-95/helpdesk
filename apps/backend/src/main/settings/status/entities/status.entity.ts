import { BaseEntity } from 'src/shared/base/base.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import slugify from 'slugify';
import { TicketEntity } from 'src/main/ticket/entities/ticket.entity';

@Entity({ name: 'status' })
export class StatusEntity extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  slug: string;

  @OneToMany(() => TicketEntity, (ticket) => ticket.status)
  tickets: TicketEntity[];

  @BeforeInsert()
  @BeforeUpdate()
  setSlug() {
    this.slug = slugify(this.name, { lower: true });
  }
}
