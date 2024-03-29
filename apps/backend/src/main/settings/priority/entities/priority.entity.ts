import { BaseEntity } from 'src/shared/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'priority' })
export class PriorityEntity extends BaseEntity {
  @Column({ unique: true })
  name: string;
}
